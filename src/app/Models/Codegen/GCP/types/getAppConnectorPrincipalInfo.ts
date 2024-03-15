import { getAppConnectorPrincipalInfoServiceAccount } from "./getAppConnectorPrincipalInfoServiceAccount";

export interface getAppConnectorPrincipalInfo {
  // ServiceAccount represents a GCP service account.
  ServiceAccounts?: Array<getAppConnectorPrincipalInfoServiceAccount>;
}
