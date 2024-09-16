import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DomainArgs {
  // The name of the Lightsail domain to manage
  domainName?: string;
}
export class Domain extends DS_Resource {
  // The ARN of the Lightsail domain
  public arn?: string;

  // The name of the Lightsail domain to manage
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'The name of the Lightsail domain to manage',
        () => [],
        true,
        true,
      ),
    ];
  }
}
