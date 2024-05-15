import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Recaptcha_EnterpriseKeyTestingOptions,
  Recaptcha_EnterpriseKeyTestingOptions_GetTypes,
} from "../types/Recaptcha_EnterpriseKeyTestingOptions";
import {
  Recaptcha_EnterpriseKeyWafSettings,
  Recaptcha_EnterpriseKeyWafSettings_GetTypes,
} from "../types/Recaptcha_EnterpriseKeyWafSettings";
import {
  Recaptcha_EnterpriseKeyWebSettings,
  Recaptcha_EnterpriseKeyWebSettings_GetTypes,
} from "../types/Recaptcha_EnterpriseKeyWebSettings";
import {
  Recaptcha_EnterpriseKeyAndroidSettings,
  Recaptcha_EnterpriseKeyAndroidSettings_GetTypes,
} from "../types/Recaptcha_EnterpriseKeyAndroidSettings";
import {
  Recaptcha_EnterpriseKeyIosSettings,
  Recaptcha_EnterpriseKeyIosSettings_GetTypes,
} from "../types/Recaptcha_EnterpriseKeyIosSettings";

export interface EnterpriseKeyArgs {
  // Options for user acceptance testing.
  TestingOptions?: Recaptcha_EnterpriseKeyTestingOptions;

  // Settings specific to keys that can be used for WAF (Web Application Firewall).
  WafSettings?: Recaptcha_EnterpriseKeyWafSettings;

  // Settings for keys that can be used by websites.
  WebSettings?: Recaptcha_EnterpriseKeyWebSettings;

  // Settings for keys that can be used by Android apps.
  AndroidSettings?: Recaptcha_EnterpriseKeyAndroidSettings;

  /*
Human-readable display name of this key. Modifiable by user.



- - -
*/
  DisplayName?: string;

  // Settings for keys that can be used by iOS apps.
  IosSettings?: Recaptcha_EnterpriseKeyIosSettings;

  /*
See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The project for the resource
  Project?: string;
}
export class EnterpriseKey extends Resource {
  // The project for the resource
  public Project?: string;

  // Options for user acceptance testing.
  public TestingOptions?: Recaptcha_EnterpriseKeyTestingOptions;

  // Settings specific to keys that can be used for WAF (Web Application Firewall).
  public WafSettings?: Recaptcha_EnterpriseKeyWafSettings;

  // Settings for keys that can be used by Android apps.
  public AndroidSettings?: Recaptcha_EnterpriseKeyAndroidSettings;

  // The timestamp corresponding to the creation of this Key.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, InputType.String>;

  // The resource id for the Key, which is the same as the Site Key itself.
  public Name?: string;

  // Settings for keys that can be used by websites.
  public WebSettings?: Recaptcha_EnterpriseKeyWebSettings;

  /*
Human-readable display name of this key. Modifiable by user.



- - -
*/
  public DisplayName?: string;

  // Settings for keys that can be used by iOS apps.
  public IosSettings?: Recaptcha_EnterpriseKeyIosSettings;

  /*
See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, InputType.String>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "IosSettings",
        "Settings for keys that can be used by iOS apps.",
        Recaptcha_EnterpriseKeyIosSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TestingOptions",
        "Options for user acceptance testing.",
        Recaptcha_EnterpriseKeyTestingOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WafSettings",
        "Settings specific to keys that can be used for WAF (Web Application Firewall).",
        Recaptcha_EnterpriseKeyWafSettings_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WebSettings",
        "Settings for keys that can be used by websites.",
        Recaptcha_EnterpriseKeyWebSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AndroidSettings",
        "Settings for keys that can be used by Android apps.",
        Recaptcha_EnterpriseKeyAndroidSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable display name of this key. Modifiable by user.\n\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
