export interface StandardAppVersionVpcAccessConnector {
  // The egress setting for the connector, controlling what traffic is diverted through it.
  EgressSetting?: string;

  // Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
  Name?: string;
}
