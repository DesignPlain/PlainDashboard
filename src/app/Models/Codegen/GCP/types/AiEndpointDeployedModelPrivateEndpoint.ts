export interface AiEndpointDeployedModelPrivateEndpoint {
  /*
(Output)
Output only. The name of the service attachment resource. Populated if private service connect is enabled.
*/
  ServiceAttachment?: string;

  /*
(Output)
Output only. Http(s) path to send explain requests.
*/
  ExplainHttpUri?: string;

  /*
(Output)
Output only. Http(s) path to send health check requests.
*/
  HealthHttpUri?: string;

  /*
(Output)
Output only. Http(s) path to send prediction requests.
*/
  PredictHttpUri?: string;
}
