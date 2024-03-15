import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DomainTrustArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
  SelectiveAuthentication?: boolean;

  // The target DNS server IP addresses which can resolve the remote domain involved in the trust.
  TargetDnsIpAddresses?: Array<string>;

  // The fully qualified target domain name which will be in trust with the current domain.
  TargetDomainName?: string;

  /*
The trust direction, which decides if the current domain is trusted, trusting, or both.
Possible values are: `INBOUND`, `OUTBOUND`, `BIDIRECTIONAL`.
*/
  TrustDirection?: string;

  /*
The trust secret used for the handshake with the target domain. This will not be stored.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  TrustHandshakeSecret?: string;

  /*
The type of trust represented by the trust resource.
Possible values are: `FOREST`, `EXTERNAL`.
*/
  TrustType?: string;

  /*
The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.


- - -
*/
  Domain?: string;
}
export class DomainTrust extends Resource {
  // The fully qualified target domain name which will be in trust with the current domain.
  public TargetDomainName?: string;

  /*
The trust direction, which decides if the current domain is trusted, trusting, or both.
Possible values are: `INBOUND`, `OUTBOUND`, `BIDIRECTIONAL`.
*/
  public TrustDirection?: string;

  /*
The trust secret used for the handshake with the target domain. This will not be stored.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public TrustHandshakeSecret?: string;

  /*
The type of trust represented by the trust resource.
Possible values are: `FOREST`, `EXTERNAL`.
*/
  public TrustType?: string;

  /*
The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.


- - -
*/
  public Domain?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
  public SelectiveAuthentication?: boolean;

  // The target DNS server IP addresses which can resolve the remote domain involved in the trust.
  public TargetDnsIpAddresses?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "SelectiveAuthentication",
        "Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetDnsIpAddresses",
        "The target DNS server IP addresses which can resolve the remote domain involved in the trust.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TargetDomainName",
        "The fully qualified target domain name which will be in trust with the current domain.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TrustDirection",
        "The trust direction, which decides if the current domain is trusted, trusting, or both.\nPossible values are: `INBOUND`, `OUTBOUND`, `BIDIRECTIONAL`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TrustHandshakeSecret",
        "The trust secret used for the handshake with the target domain. This will not be stored.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TrustType",
        "The type of trust represented by the trust resource.\nPossible values are: `FOREST`, `EXTERNAL`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Domain",
        "The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,\nhttps://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.\n\n\n- - -",
      ),
    ];
  }
}
