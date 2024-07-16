import { useFormik } from 'formik';
import { getWeek } from 'date-fns';
import toast from 'react-hot-toast';
import Row from '@/components/core/row';
import { useState, useEffect } from 'react';
import ApiClient from '@/services/appClient';
import Column from '@/components/core/column';
import { useQuery, useMutation } from 'react-query';
import CoreButton from '@/components/core/core-button';
import { LoadingTopbar } from '@/components/loading-screen';

import {
  Box,
  Card,
  Alert,
  Select,
  Slider,
  Divider,
  MenuItem,
  TextField,
  Container,
  CardHeader,
  InputLabel,
  Typography,
  FormControl,
} from '@mui/material';

import { CreateWeeklyReportRequest } from '../types';

// ----------------------------------------------------------------------

const themesSelectOptions = [
  {
    label: 'Capacity',
    value: 'capacity',
  },
  {
    label: 'Skill gaps',
    value: 'skill-gaps',
  },
  {
    label: 'Communication',
    value: 'communication',
  },
  {
    label: 'Personal',
    value: 'personal',
  },
];

const sliderMarks = [
  {
    value: 0,
    label: 'Awful',
  },
  {
    value: 1,
    label: '',
  },
  {
    value: 2,
    label: '',
  },
  {
    value: 3,
    label: '',
  },
  {
    value: 4,
    label: '',
  },
  {
    value: 5,
    label: '',
  },
  {
    value: 6,
    label: '',
  },
  {
    value: 7,
    label: '',
  },
  {
    value: 8,
    label: '',
  },
  {
    value: 9,
    label: '',
  },
  {
    value: 10,
    label: 'Fantastic',
  },
];

// ----------------------------------------------------------------------

const OneToOnesView = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const [weekExists, setWeekExists] = useState(false);

  const now = new Date();

  const currentWeek = getWeek(now);

  const currentYear = now.getFullYear();

  const formik = useFormik<CreateWeeklyReportRequest>({
    initialValues: {
      goneWell: [
        {
          label: '',
          theme: 'capacity',
        },
      ],
      challenges: [
        {
          label: '',
          theme: 'capacity',
        },
      ],
      agendas: [],
      week: currentWeek,
      wellbeingScores: {
        growth: 5,
        impactAndProductivity: 5,
        wellbeing: 5,
        workOverall: 5,
        workRelationships: 5,
      },
      year: currentYear,
    } as CreateWeeklyReportRequest,
    onSubmit: (values) => {
      console.log(values);
      saveMutation.mutate(values);
    },
    enableReinitialize: true,
  });

  const initialWeeklyReport = useQuery({
    queryKey: ['getWeeklyReportByWeekAndYearAsReportee'],
    queryFn: async () => {
      return await ApiClient.oneToOne.getWeeklyReportByWeekAndYearAsReportee();
    },
    onSuccess: (res) => {
      setWeekExists(res?.data?.data?.week === currentWeek && res?.data?.data?.year === currentYear);
      formik.setValues({
        goneWell: [
          ...(res?.data?.data?.goneWell ?? []),
          {
            label: '',
            theme: 'capacity',
          },
        ],
        challenges: [
          ...(res?.data?.data?.challenges ?? []),
          {
            label: '',
            theme: 'capacity',
          },
        ],
        agendas: [...(res?.data?.data?.agendas ?? [])],
        week: currentWeek,
        wellbeingScores: {
          growth: res?.data?.data?.wellbeingScores?.growth ?? 5,
          impactAndProductivity: res?.data?.data?.wellbeingScores?.impactAndProductivity ?? 5,
          wellbeing: res?.data?.data?.wellbeingScores?.wellbeing ?? 5,
          workOverall: res?.data?.data?.wellbeingScores?.workOverall ?? 5,
          workRelationships: res?.data?.data?.wellbeingScores?.workRelationships ?? 5,
        },
        year: currentYear,
      });
    },
    onError: () => {},
  });

  // --------- MUTATION ----------------

  const saveMutation = useMutation({
    mutationFn: async (input: any) => {
      if (weekExists && initialWeeklyReport.data?.data?.data?.id) {
        return await ApiClient.oneToOne.updateWeeklyReportAsReportee(
          input,
          initialWeeklyReport.data?.data?.data?.id
        );
      } else {
        return await ApiClient.oneToOne.createWeeklyReport(input);
      }
    },
    onSuccess: (_res) => {
      toast.success('Submitted');
    },
    onError: () => {
      toast.error('Error saving');
    },
  });

  // ---------- USE EFFECT -------------

  useEffect(() => {
    if (saveMutation.isSuccess) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [saveMutation.isSuccess]);

  // --------- RENDER ------------------

  return (
    <Container sx={{ mx: 'auto' }}>
      <Column>
        {(initialWeeklyReport.isLoading || saveMutation.isLoading) && <LoadingTopbar />}

        <Card sx={{ my: 3 }}>
          <CardHeader
            title={`Your 1-2-1s`}
            subheader={`Week ${currentWeek} of ${currentYear}`}
            sx={{
              mb: 3,
            }}
          />
          <Divider sx={{ borderStyle: 'dashed' }} />

          <Column>
            {/************************************************************
             * Gone well
             ************************************************************/}
            <Column padding={3}>
              <Typography>What has gone well since last time?</Typography>
              <Column>
                {formik?.values?.goneWell?.map((_goneWell, index) => {
                  return (
                    <Row key={index}>
                      <TextField
                        name="goneWell"
                        value={formik.values.goneWell[index].label}
                        onChange={(e) => {
                          formik.setFieldValue(`goneWell[${index}].label`, e.target.value);
                        }}
                        sx={{
                          flex: 3,
                        }}
                      />
                      <FormControl
                        fullWidth
                        sx={{
                          flex: 1,
                        }}
                      >
                        <InputLabel id="goneWell-select">Theme</InputLabel>
                        <Select
                          labelId="goneWell-select"
                          id="demo-simple-select"
                          value={formik.values.goneWell[index].theme}
                          label="Theme"
                          onChange={(e) => {
                            formik.setFieldValue(
                              `goneWell[${index}].theme`,
                              e.target.value ?? 'capacity'
                            );
                          }}
                        >
                          {themesSelectOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Row>
                  );
                })}
              </Column>

              <CoreButton
                buttonVariant="secondary"
                onClick={() => {
                  formik.setFieldValue('goneWell', [
                    ...formik.values.goneWell,
                    {
                      label: '',
                      theme: 'capacity',
                    },
                  ]);
                }}
              >
                Add a topic
              </CoreButton>
            </Column>

            {/************************************************************
             * Challenges
             ************************************************************/}
            <Column padding={3}>
              <Typography>What challenges have you experienced since last time?</Typography>
              <Column>
                {formik?.values?.challenges?.map((_challenge, index) => {
                  return (
                    <Row key={index}>
                      <TextField
                        name="challenges"
                        value={formik.values.challenges[index].label}
                        onChange={(e) => {
                          formik.setFieldValue(`challenges[${index}].label`, e.target.value);
                        }}
                        sx={{
                          flex: 3,
                        }}
                      />
                      <FormControl
                        fullWidth
                        sx={{
                          flex: 1,
                        }}
                      >
                        <InputLabel id="challenges-select">Theme</InputLabel>
                        <Select
                          labelId="challenges-select"
                          id="challenges-select"
                          value={formik.values.challenges[index].theme}
                          label="Theme"
                          onChange={(e) => {
                            formik.setFieldValue(
                              `challenges[${index}].theme`,
                              e.target.value ?? 'capacity'
                            );
                          }}
                        >
                          {themesSelectOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Row>
                  );
                })}
              </Column>

              <CoreButton
                buttonVariant="secondary"
                onClick={() => {
                  formik.setFieldValue('challenges', [
                    ...formik.values.challenges,
                    {
                      label: '',
                      theme: 'capacity',
                    },
                  ]);
                }}
              >
                Add challenge
              </CoreButton>
            </Column>

            <Divider sx={{ borderStyle: 'dashed' }} />
            <CardHeader
              title="Wellbeing check-in"
              sx={{
                mb: 3,
              }}
            />

            {/************************************************************
             * Wellbeing check-in
             ************************************************************/}
            {/* <Typography variant="h6">Wellbeing check-in</Typography> */}

            <Column sx={{ px: 4, gap: 4 }}>
              <Column gap={1}>
                <Typography>
                  Work overall
                  <br />
                  <Typography variant="caption" color={'text.tertiary'}>
                    General feeling about work
                  </Typography>
                </Typography>
                <Slider
                  aria-label="wellbeing-slider"
                  value={formik.values.wellbeingScores.workOverall}
                  onChange={(_e, n, _a) => {
                    formik.setFieldValue('wellbeingScores.workOverall', n);
                  }}
                  step={null}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10}
                  marks={sliderMarks}
                />
              </Column>

              <Column gap={1}>
                <Typography>
                  Wellbeing
                  <br />
                  <Typography variant="caption" color={'text.tertiary'}>
                    Work-life balance, stress, general wellness
                  </Typography>
                </Typography>
                <Slider
                  aria-label="wellbeing-slider"
                  value={formik.values.wellbeingScores.wellbeing}
                  onChange={(_e, n, _a) => {
                    formik.setFieldValue('wellbeingScores.wellbeing', n);
                  }}
                  step={null}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10}
                  marks={sliderMarks}
                />
              </Column>

              <Column gap={1}>
                <Typography>
                  Growth
                  <br />
                  <Typography variant="caption" color={'text.tertiary'}>
                    Learning, development, feedback
                  </Typography>
                </Typography>
                <Slider
                  aria-label="wellbeing-slider"
                  value={formik.values.wellbeingScores.growth}
                  onChange={(_e, n, _a) => {
                    formik.setFieldValue('wellbeingScores.growth', n);
                  }}
                  step={null}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10}
                  marks={sliderMarks}
                />
              </Column>

              <Column gap={1}>
                <Typography>
                  Work relationships
                  <br />
                  <Typography variant="caption" color={'text.tertiary'}>
                    People interaction, team dynamic
                  </Typography>
                </Typography>
                <Slider
                  aria-label="wellbeing-slider"
                  value={formik.values.wellbeingScores.workRelationships}
                  onChange={(_e, n, _a) => {
                    formik.setFieldValue('wellbeingScores.workRelationships', n);
                  }}
                  step={null}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10}
                  marks={sliderMarks}
                />
              </Column>

              <Column gap={1}>
                <Typography>
                  Impact and productivitiy
                  <br />
                  <Typography variant="caption" color={'text.tertiary'}>
                    Progress in tasks, projects, goals
                  </Typography>
                </Typography>
                <Slider
                  aria-label="wellbeing-slider"
                  value={formik.values.wellbeingScores.impactAndProductivity}
                  onChange={(_e, n, _a) => {
                    formik.setFieldValue('wellbeingScores.impactAndProductivity', n);
                  }}
                  step={null}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10}
                  marks={sliderMarks}
                />
              </Column>
            </Column>

            <Row width={'100%'} justifyContent={'center'} pb={2}>
              <CoreButton
                buttonVariant="primary"
                disabled={saveMutation.isLoading}
                onClick={() => {
                  formik.submitForm();
                }}
              >
                Save
              </CoreButton>
            </Row>

            {showSuccess && (
              <Alert
                severity="success"
                sx={{
                  mx: 3,
                }}
              >
                Saved successfully
              </Alert>
            )}

            <Box pb={3}></Box>
          </Column>
        </Card>
      </Column>
    </Container>
  );
};

export default OneToOnesView;
