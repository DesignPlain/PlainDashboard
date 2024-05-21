import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DomainTrustArgs {
  /*
The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.


- - -
*/
  domain?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
  selectiveAuthentication?: boolean;

  // The target DNS server IP addresses which can resolve the remote domain involved in the trust.
  targetDnsIpAddresses?: Array<string>;

  // The fully qualified target domain name which will be in trust with the current domain.
  targetDomainName?: string;

  /*
The trust direction, which decides if the current domain is trusted, trusting, or both.
Possible values are: `INBOUND`, `OUTBOUND`, `BIDIRECTIONAL`.
*/
  trustDirection?: string;

  /*
The trust secret used for the handshake with the target domain. This will not be stored.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  trustHandshakeSecret?: string;

  /*
The type of trust represented by the trust resource.
Possible values are: `FOREST`, `EXTERNAL`.
*/
  trustType?: string;
}
export class DomainTrust extends Resource {
  // The fully qualified target domain name which will be in trust with the current domain.
  public targetDomainName?: string;

  /*
The trust direction, which decides if the current domain is trusted, trusting, or both.
Possible values are: `INBOUND`, `OUTBOUND`, `BIDIRECTIONAL`.
*/
  public trustDirection?: string;

  /*
The trust secret used for the handshake with the target domain. This will not be stored.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public trustHandshakeSecret?: string;

  /*
The type of trust represented by the trust resource.
Possible values are: `FOREST`, `EXTERNAL`.
*/
  public trustType?: string;

  /*
The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.


- - -
*/
  public domain?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
  public selectiveAuthentication?: boolean;

  // The target DNS server IP addresses which can resolve the remote domain involved in the trust.
  public targetDnsIpAddresses?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "trustDirection",
        "The trust direction, which decides if the current domain is trusted, trusting, or both.\nPossible values are: `INBOUND`, `OUTBOUND`, `BIDIRECTIONAL`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "trustHandshakeSecret",
        "The trust secret used for the handshake with the target domain. This will not be stored.\n**Note**: This property is sensitive and will not be displayed in the plan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "trustType",
        "The type of trust represented by the trust resource.\nPossible values are: `FOREST`, `EXTERNAL`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,\nhttps://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "selectiveAuthentication",
        "Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetDnsIpAddresses",
        "The target DNS server IP addresses which can resolve the remote domain involved in the trust.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetDomainName",
        "The fully qualified target domain name which will be in trust with the current domain.",
        [],
        true,
        false,
      ),
    ];
  }
}
