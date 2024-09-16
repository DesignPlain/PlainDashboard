import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AlertManagerDefinitionArgs {
  // ID of the prometheus workspace the alert manager definition should be linked to
  workspaceId?: string;

  // the alert manager definition that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html).
  definition?: string;
}
export class AlertManagerDefinition extends DS_Resource {
  // the alert manager definition that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html).
  public definition?: string;

  // ID of the prometheus workspace the alert manager definition should be linked to
  public workspaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'workspaceId',
        'ID of the prometheus workspace the alert manager definition should be linked to',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'definition',
        'the alert manager definition that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html).',
        () => [],
        true,
        false,
      ),
    ];
  }
}
