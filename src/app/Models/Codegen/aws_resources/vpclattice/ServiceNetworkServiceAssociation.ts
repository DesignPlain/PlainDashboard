import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vpclattice_ServiceNetworkServiceAssociationDnsEntry,
  vpclattice_ServiceNetworkServiceAssociationDnsEntry_GetTypes,
} from "../types/vpclattice_ServiceNetworkServiceAssociationDnsEntry";

export interface ServiceNetworkServiceAssociationArgs {
  // The ID or Amazon Resource Identifier (ARN) of the service.
  serviceIdentifier?: string;

  /*
The ID or Amazon Resource Identifier (ARN) of the service network. You must use the ARN if the resources specified in the operation are in different accounts.
The following arguments are optional:
*/
  serviceNetworkIdentifier?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ServiceNetworkServiceAssociation extends Resource {
  // The account that created the association.
  public createdBy?: string;

  // The DNS name of the service.
  public dnsEntries?: Array<vpclattice_ServiceNetworkServiceAssociationDnsEntry>;

  /*
The ID or Amazon Resource Identifier (ARN) of the service network. You must use the ARN if the resources specified in the operation are in different accounts.
The following arguments are optional:
*/
  public serviceNetworkIdentifier?: string;

  // The operations status. Valid Values are CREATE_IN_PROGRESS | ACTIVE | DELETE_IN_PROGRESS | CREATE_FAILED | DELETE_FAILED
  public status?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the Association.
  public arn?: string;

  // The custom domain name of the service.
  public customDomainName?: string;

  // The ID or Amazon Resource Identifier (ARN) of the service.
  public serviceIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serviceIdentifier",
        "The ID or Amazon Resource Identifier (ARN) of the service.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceNetworkIdentifier",
        "The ID or Amazon Resource Identifier (ARN) of the service network. You must use the ARN if the resources specified in the operation are in different accounts.\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
