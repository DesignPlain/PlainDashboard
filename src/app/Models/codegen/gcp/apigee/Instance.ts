import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface InstanceArgs {
  /*
Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`
*/
  diskEncryptionKeyName?: string;

  // Display name of the instance.
  displayName?: string;

  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.


- - -
*/
  orgId?: string;

  /*
The size of the CIDR block range that will be reserved by the instance. For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.
*/
  peeringCidrRange?: string;

  /*
Optional. Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.
*/
  consumerAcceptLists?: Array<string>;

  // Description of the instance.
  description?: string;

  /*
IP range represents the customer-provided CIDR block of length 22 that will be used for
the Apigee instance creation. This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"
*/
  ipRange?: string;

  // Required. Compute Engine location where the instance resides.
  location?: string;

  // Resource ID of the instance.
  name?: string;
}
export class Instance extends DS_Resource {
  // Output only. Port number of the exposed Apigee endpoint.
  public port?: string;

  // Description of the instance.
  public description?: string;

  /*
Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`
*/
  public diskEncryptionKeyName?: string;

  // Output only. Hostname or IP address of the exposed Apigee endpoint used by clients to connect to the service.
  public host?: string;

  // Required. Compute Engine location where the instance resides.
  public location?: string;

  // Resource ID of the instance.
  public name?: string;

  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.


- - -
*/
  public orgId?: string;

  /*
The size of the CIDR block range that will be reserved by the instance. For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.
*/
  public peeringCidrRange?: string;

  /*
Output only. Resource name of the service attachment created for the instance in
the format: projects/-/regions/-/serviceAttachments/- Apigee customers can privately
forward traffic to this service attachment using the PSC endpoints.
*/
  public serviceAttachment?: string;

  /*
Optional. Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.
*/
  public consumerAcceptLists?: Array<string>;

  // Display name of the instance.
  public displayName?: string;

  /*
IP range represents the customer-provided CIDR block of length 22 that will be used for
the Apigee instance creation. This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"
*/
  public ipRange?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Display name of the instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The Apigee Organization associated with the Apigee instance,\nin the format `organizations/{{org_name}}`.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "peeringCidrRange",
        "The size of the CIDR block range that will be reserved by the instance. For valid values,\nsee [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipRange",
        'IP range represents the customer-provided CIDR block of length 22 that will be used for\nthe Apigee instance creation. This optional range, if provided, should be freely\navailable as part of larger named range the customer has allocated to the Service\nNetworking peering. If this is not provided, Apigee will automatically request for any\navailable /22 CIDR block from Service Networking. The customer should use this CIDR block\nfor configuring their firewall needs to allow traffic from Apigee.\nInput format: "a.b.c.d/22"',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Required. Compute Engine location where the instance resides.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Resource ID of the instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "diskEncryptionKeyName",
        "Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.\nUse the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "consumerAcceptLists",
        "Optional. Customer accept list represents the list of projects (id/number) on customer\nside that can privately connect to the service attachment. It is an optional field\nwhich the customers can provide during the instance creation. By default, the customer\nproject associated with the Apigee organization will be included to the list.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
