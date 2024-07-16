// src/components/reporting.jsx
import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const PowerBIEmbedComponent = ({ embedToken, reportId, groupId }) => {
  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
        id: reportId,
        embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${groupId}`,
        accessToken: embedToken,
        tokenType: models.TokenType.Embed,
        settings: {
          panes: {
            filters: {
              visible: false
            },
            pageNavigation: {
              visible: false
            }
          }
        }
      }}

      eventHandlers={
        new Map([
          ['loaded', function () { console.log('Report loaded'); }],
          ['rendered', function () { console.log('Report rendered'); }],
          ['error', function (event) { console.log('Report error', event.detail); }]
        ])
      }

      cssClassName={'report-style-class'}

      getEmbeddedComponent={(embeddedReport) => {
        console.log('Embedded report:', embeddedReport);
      }}
    />
  );
}

export default PowerBIEmbedComponent;
