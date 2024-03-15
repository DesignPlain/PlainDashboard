import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceArgs {
  /*
Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`
*/
  DiskEncryptionKeyName?: string;

  /*
IP range represents the customer-provided CIDR block of length 22 that will be used for
the Apigee instance creation. This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"
*/
  IpRange?: string;

  // Required. Compute Engine location where the instance resides.
  Location?: string;

  // Resource ID of the instance.
  Name?: string;

  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.


- - -
*/
  OrgId?: string;

  /*
Optional. Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.
*/
  ConsumerAcceptLists?: Array<string>;

  // Display name of the instance.
  DisplayName?: string;

  /*
The size of the CIDR block range that will be reserved by the instance. For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.
*/
  PeeringCidrRange?: string;

  // Description of the instance.
  Description?: string;
}
export class Instance extends Resource {
  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.


- - -
*/
  public OrgId?: string;

  // Output only. Port number of the exposed Apigee endpoint.
  public Port?: string;

  /*
Optional. Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.
*/
  public ConsumerAcceptLists?: Array<string>;

  // Display name of the instance.
  public DisplayName?: string;

  // Output only. Hostname or IP address of the exposed Apigee endpoint used by clients to connect to the service.
  public Host?: string;

  // Required. Compute Engine location where the instance resides.
  public Location?: string;

  /*
The size of the CIDR block range that will be reserved by the instance. For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.
*/
  public PeeringCidrRange?: string;

  /*
Output only. Resource name of the service attachment created for the instance in
the format: projects/-/regions/-/serviceAttachments/- Apigee customers can privately
forward traffic to this service attachment using the PSC endpoints.
*/
  public ServiceAttachment?: string;

  // Description of the instance.
  public Description?: string;

  /*
Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`
*/
  public DiskEncryptionKeyName?: string;

  /*
IP range represents the customer-provided CIDR block of length 22 that will be used for
the Apigee instance creation. This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"
*/
  public IpRange?: string;

  // Resource ID of the instance.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "IpRange",
        'IP range represents the customer-provided CIDR block of length 22 that will be used for\nthe Apigee instance creation. This optional range, if provided, should be freely\navailable as part of larger named range the customer has allocated to the Service\nNetworking peering. If this is not provided, Apigee will automatically request for any\navailable /22 CIDR block from Service Networking. The customer should use this CIDR block\nfor configuring their firewall needs to allow traffic from Apigee.\nInput format: "a.b.c.d/22"',
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name of the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeeringCidrRange",
        "The size of the CIDR block range that will be reserved by the instance. For valid values,\nsee [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DiskEncryptionKeyName",
        "Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.\nUse the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Required. Compute Engine location where the instance resides.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Resource ID of the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization associated with the Apigee instance,\nin the format `organizations/{{org_name}}`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ConsumerAcceptLists",
        "Optional. Customer accept list represents the list of projects (id/number) on customer\nside that can privately connect to the service attachment. It is an optional field\nwhich the customers can provide during the instance creation. By default, the customer\nproject associated with the Apigee organization will be included to the list.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the instance.",
      ),
    ];
  }
}
