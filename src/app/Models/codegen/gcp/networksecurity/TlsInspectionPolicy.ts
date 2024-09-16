import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface TlsInspectionPolicyArgs {
  // A CA pool resource used to issue interception certificates.
  caPool?: string;

  // Free-text description of the resource.
  description?: string;

  // If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.
  excludePublicCaSet?: boolean;

  // The location of the tls inspection policy.
  location?: string;

  /*
Short name of the TlsInspectionPolicy resource to be created.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class TlsInspectionPolicy extends DS_Resource {
  // If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.
  public excludePublicCaSet?: boolean;

  // The location of the tls inspection policy.
  public location?: string;

  /*
Short name of the TlsInspectionPolicy resource to be created.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The timestamp when the resource was updated.
  public updateTime?: string;

  // A CA pool resource used to issue interception certificates.
  public caPool?: string;

  // The timestamp when the resource was created.
  public createTime?: string;

  // Free-text description of the resource.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'excludePublicCaSet',
        'If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location of the tls inspection policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Short name of the TlsInspectionPolicy resource to be created.\n\n\n- - -',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'caPool',
        'A CA pool resource used to issue interception certificates.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Free-text description of the resource.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
