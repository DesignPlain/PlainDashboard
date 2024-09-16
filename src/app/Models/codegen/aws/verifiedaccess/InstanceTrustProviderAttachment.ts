import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface InstanceTrustProviderAttachmentArgs {
  // The ID of the Verified Access instance to attach the Trust Provider to.
  verifiedaccessInstanceId?: string;

  // The ID of the Verified Access trust provider.
  verifiedaccessTrustProviderId?: string;
}
export class InstanceTrustProviderAttachment extends DS_Resource {
  // The ID of the Verified Access trust provider.
  public verifiedaccessTrustProviderId?: string;

  // The ID of the Verified Access instance to attach the Trust Provider to.
  public verifiedaccessInstanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'verifiedaccessTrustProviderId',
        'The ID of the Verified Access trust provider.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'verifiedaccessInstanceId',
        'The ID of the Verified Access instance to attach the Trust Provider to.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
