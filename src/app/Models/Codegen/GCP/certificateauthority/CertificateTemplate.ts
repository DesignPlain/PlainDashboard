import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CertificateTemplatePredefinedValues } from "../types/CertificateTemplatePredefinedValues";
import { CertificateTemplateIdentityConstraints } from "../types/CertificateTemplateIdentityConstraints";
import { CertificateTemplatePassthroughExtensions } from "../types/CertificateTemplatePassthroughExtensions";

export interface CertificateTemplateArgs {
  // The project for the resource
  Project?: string;

  // Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  Description?: string;

  // Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is omitted, then this template will not add restrictions on a certificate's identity.
  IdentityConstraints?: CertificateTemplateIdentityConstraints;

  /*
Optional. Labels with user-defined metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location for the resource
  Location?: string;

  // The resource name for this CertificateTemplate in the format `projects/-/locations/-/certificateTemplates/-`.
  Name?: string;

  // Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.
  PassthroughExtensions?: CertificateTemplatePassthroughExtensions;

  // Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the certificate issuance request will fail.
  PredefinedValues?: CertificateTemplatePredefinedValues;
}
export class CertificateTemplate extends Resource {
  /*
Optional. Labels with user-defined metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The location for the resource
  public Location?: string;

  // The project for the resource
  public Project?: string;

  // Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The resource name for this CertificateTemplate in the format `projects/-/locations/-/certificateTemplates/-`.
  public Name?: string;

  // Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.
  public PassthroughExtensions?: CertificateTemplatePassthroughExtensions;

  // Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the certificate issuance request will fail.
  public PredefinedValues?: CertificateTemplatePredefinedValues;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Output only. The time at which this CertificateTemplate was updated.
  public UpdateTime?: string;

  // Output only. The time at which this CertificateTemplate was created.
  public CreateTime?: string;

  // Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is omitted, then this template will not add restrictions on a certificate's identity.
  public IdentityConstraints?: CertificateTemplateIdentityConstraints;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IdentityConstraints",
        "Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is omitted, then this template will not add restrictions on a certificate's identity.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Optional. Labels with user-defined metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name for this CertificateTemplate in the format `projects/*/locations/*/certificateTemplates/*`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PassthroughExtensions",
        "Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PredefinedValues",
        "Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the certificate issuance request will fail.",
      ),
    ];
  }
}
