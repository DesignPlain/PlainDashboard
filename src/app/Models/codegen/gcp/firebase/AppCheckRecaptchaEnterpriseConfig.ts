import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AppCheckRecaptchaEnterpriseConfigArgs {
  /*
The ID of an
[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).


- - -
*/
  appId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.
--Important--: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.
*/
  siteKey?: string;

  /*
Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  tokenTtl?: string;
}
export class AppCheckRecaptchaEnterpriseConfig extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.
--Important--: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.
*/
  public siteKey?: string;

  /*
Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public tokenTtl?: string;

  /*
The ID of an
[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).


- - -
*/
  public appId?: string;

  // The relative resource name of the reCAPTCHA Enterprise configuration object
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'appId',
        'The ID of an\n[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).\n\n\n- - -',
        () => [],
        true,
        true,
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
        'siteKey',
        'The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.\n**Important**: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tokenTtl',
        'Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.\nIf unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.\nA duration in seconds with up to nine fractional digits, ending with \'s\'. Example: "3.5s".',
        () => [],
        false,
        false,
      ),
    ];
  }
}
