import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PrincipalAssociationArgs {
  // The principal to associate with the resource share. Possible values are an AWS account ID, an AWS Organizations Organization ARN, or an AWS Organizations Organization Unit ARN.
  principal?: string;

  // The Amazon Resource Name (ARN) of the resource share.
  resourceShareArn?: string;
}
export class PrincipalAssociation extends DS_Resource {
  // The principal to associate with the resource share. Possible values are an AWS account ID, an AWS Organizations Organization ARN, or an AWS Organizations Organization Unit ARN.
  public principal?: string;

  // The Amazon Resource Name (ARN) of the resource share.
  public resourceShareArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'principal',
        'The principal to associate with the resource share. Possible values are an AWS account ID, an AWS Organizations Organization ARN, or an AWS Organizations Organization Unit ARN.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceShareArn',
        'The Amazon Resource Name (ARN) of the resource share.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
