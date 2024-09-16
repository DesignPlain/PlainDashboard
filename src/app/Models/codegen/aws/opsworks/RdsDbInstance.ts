import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RdsDbInstanceArgs {
  // The db instance to register for this stack. Changing this will force a new resource.
  rdsDbInstanceArn?: string;

  // The stack to register a db instance for. Changing this will force a new resource.
  stackId?: string;

  // A db password
  dbPassword?: string;

  // A db username
  dbUser?: string;
}
export class RdsDbInstance extends DS_Resource {
  // The db instance to register for this stack. Changing this will force a new resource.
  public rdsDbInstanceArn?: string;

  // The stack to register a db instance for. Changing this will force a new resource.
  public stackId?: string;

  // A db password
  public dbPassword?: string;

  // A db username
  public dbUser?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'rdsDbInstanceArn',
        'The db instance to register for this stack. Changing this will force a new resource.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'stackId',
        'The stack to register a db instance for. Changing this will force a new resource.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbPassword',
        'A db password',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbUser',
        'A db username',
        () => [],
        true,
        false,
      ),
    ];
  }
}
