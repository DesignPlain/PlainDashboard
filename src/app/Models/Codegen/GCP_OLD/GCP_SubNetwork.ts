import { Resource } from 'src/app/Models/CloudResource';


export class GCP_SubNetwork extends Resource {
  public IpCidrRange: string;
  public Region: string;
  public Purpose: string;
  public Network: string;
  constructor() {
    super('Subnet', 'GCP');
  }
}
