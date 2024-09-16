import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AccessLogSubscriptionArgs {
  // Amazon Resource Name (ARN) of the log destination.
  destinationArn?: string;

  // The ID or Amazon Resource Identifier (ARN) of the service network or service. You must use the ARN if the resources specified in the operation are in different accounts.
  resourceIdentifier?: string;

  //
  tags?: Map<string, string>;
}
export class AccessLogSubscription extends DS_Resource {
  // Amazon Resource Name (ARN) of the log destination.
  public destinationArn?: string;

  // Amazon Resource Name (ARN) of the service network or service.
  public resourceArn?: string;

  // The ID or Amazon Resource Identifier (ARN) of the service network or service. You must use the ARN if the resources specified in the operation are in different accounts.
  public resourceIdentifier?: string;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the access log subscription.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'destinationArn',
        'Amazon Resource Name (ARN) of the log destination.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceIdentifier',
        'The ID or Amazon Resource Identifier (ARN) of the service network or service. You must use the ARN if the resources specified in the operation are in different accounts.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
