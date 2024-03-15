import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { EnterpriseKeyTestingOptions } from "../types/EnterpriseKeyTestingOptions";
import { EnterpriseKeyWafSettings } from "../types/EnterpriseKeyWafSettings";
import { EnterpriseKeyWebSettings } from "../types/EnterpriseKeyWebSettings";
import { EnterpriseKeyAndroidSettings } from "../types/EnterpriseKeyAndroidSettings";
import { EnterpriseKeyIosSettings } from "../types/EnterpriseKeyIosSettings";

export interface EnterpriseKeyArgs {
  // Options for user acceptance testing.
  TestingOptions?: EnterpriseKeyTestingOptions;

  // Settings specific to keys that can be used for WAF (Web Application Firewall).
  WafSettings?: EnterpriseKeyWafSettings;

  // Settings for keys that can be used by websites.
  WebSettings?: EnterpriseKeyWebSettings;

  // Settings for keys that can be used by Android apps.
  AndroidSettings?: EnterpriseKeyAndroidSettings;

  /*
Human-readable display name of this key. Modifiable by user.



- - -
*/
  DisplayName?: string;

  // Settings for keys that can be used by iOS apps.
  IosSettings?: EnterpriseKeyIosSettings;

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
  // Settings for keys that can be used by websites.
  public WebSettings?: EnterpriseKeyWebSettings;

  /*
Human-readable display name of this key. Modifiable by user.



- - -
*/
  public DisplayName?: string;

  // Settings for keys that can be used by iOS apps.
  public IosSettings?: EnterpriseKeyIosSettings;

  /*
See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Options for user acceptance testing.
  public TestingOptions?: EnterpriseKeyTestingOptions;

  // Settings specific to keys that can be used for WAF (Web Application Firewall).
  public WafSettings?: EnterpriseKeyWafSettings;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Settings for keys that can be used by Android apps.
  public AndroidSettings?: EnterpriseKeyAndroidSettings;

  // The timestamp corresponding to the creation of this Key.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The resource id for the Key, which is the same as the Site Key itself.
  public Name?: string;

  // The project for the resource
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "TestingOptions",
        "Options for user acceptance testing.",
      ),
      new DynamicUIProps(
        InputType.String,
        "WafSettings",
        "Settings specific to keys that can be used for WAF (Web Application Firewall).",
      ),
      new DynamicUIProps(
        InputType.String,
        "WebSettings",
        "Settings for keys that can be used by websites.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AndroidSettings",
        "Settings for keys that can be used by Android apps.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable display name of this key. Modifiable by user.\n\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "IosSettings",
        "Settings for keys that can be used by iOS apps.",
      ),
    ];
  }
}
