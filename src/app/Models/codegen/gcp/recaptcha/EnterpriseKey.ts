import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  recaptcha_EnterpriseKeyIosSettings,
  recaptcha_EnterpriseKeyIosSettings_GetTypes,
} from "../types/recaptcha_EnterpriseKeyIosSettings";
import {
  recaptcha_EnterpriseKeyTestingOptions,
  recaptcha_EnterpriseKeyTestingOptions_GetTypes,
} from "../types/recaptcha_EnterpriseKeyTestingOptions";
import {
  recaptcha_EnterpriseKeyWafSettings,
  recaptcha_EnterpriseKeyWafSettings_GetTypes,
} from "../types/recaptcha_EnterpriseKeyWafSettings";
import {
  recaptcha_EnterpriseKeyWebSettings,
  recaptcha_EnterpriseKeyWebSettings_GetTypes,
} from "../types/recaptcha_EnterpriseKeyWebSettings";
import {
  recaptcha_EnterpriseKeyAndroidSettings,
  recaptcha_EnterpriseKeyAndroidSettings_GetTypes,
} from "../types/recaptcha_EnterpriseKeyAndroidSettings";

export interface EnterpriseKeyArgs {
  /*
Human-readable display name of this key. Modifiable by user.



- - -
*/
  displayName?: string;

  // Settings for keys that can be used by iOS apps.
  iosSettings?: recaptcha_EnterpriseKeyIosSettings;

  /*
See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The project for the resource
  project?: string;

  // Options for user acceptance testing.
  testingOptions?: recaptcha_EnterpriseKeyTestingOptions;

  // Settings specific to keys that can be used for WAF (Web Application Firewall).
  wafSettings?: recaptcha_EnterpriseKeyWafSettings;

  // Settings for keys that can be used by websites.
  webSettings?: recaptcha_EnterpriseKeyWebSettings;

  // Settings for keys that can be used by Android apps.
  androidSettings?: recaptcha_EnterpriseKeyAndroidSettings;
}
export class EnterpriseKey extends DS_Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Settings for keys that can be used by iOS apps.
  public iosSettings?: recaptcha_EnterpriseKeyIosSettings;

  // Options for user acceptance testing.
  public testingOptions?: recaptcha_EnterpriseKeyTestingOptions;

  // Settings specific to keys that can be used for WAF (Web Application Firewall).
  public wafSettings?: recaptcha_EnterpriseKeyWafSettings;

  // The timestamp corresponding to the creation of this Key.
  public createTime?: string;

  /*
Human-readable display name of this key. Modifiable by user.



- - -
*/
  public displayName?: string;

  /*
See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The resource id for the Key, which is the same as the Site Key itself.
  public name?: string;

  // The project for the resource
  public project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Settings for keys that can be used by websites.
  public webSettings?: recaptcha_EnterpriseKeyWebSettings;

  // Settings for keys that can be used by Android apps.
  public androidSettings?: recaptcha_EnterpriseKeyAndroidSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "testingOptions",
        "Options for user acceptance testing.",
        () => recaptcha_EnterpriseKeyTestingOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "wafSettings",
        "Settings specific to keys that can be used for WAF (Web Application Firewall).",
        () => recaptcha_EnterpriseKeyWafSettings_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "webSettings",
        "Settings for keys that can be used by websites.",
        () => recaptcha_EnterpriseKeyWebSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "androidSettings",
        "Settings for keys that can be used by Android apps.",
        () => recaptcha_EnterpriseKeyAndroidSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Human-readable display name of this key. Modifiable by user.\n\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "iosSettings",
        "Settings for keys that can be used by iOS apps.",
        () => recaptcha_EnterpriseKeyIosSettings_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
