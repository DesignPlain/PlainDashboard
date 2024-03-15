import { Resource } from 'src/app/Models/CloudResource';


export class GCP_VPCNetwork extends Resource {
  public AutoCreateSubNetwork: boolean;
  public RoutingMode: string;
  public MTU: number;
  public DeleteDefaultRoutesOnCreate: boolean;
  public NetworkFirewallPolicyEnforcementOrder: string;
  constructor() {
    super('VPC', 'GCP');
  }
}
