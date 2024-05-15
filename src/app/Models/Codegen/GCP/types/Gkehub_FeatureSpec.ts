import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureSpecClusterupgrade,
  Gkehub_FeatureSpecClusterupgrade_GetTypes,
} from "./Gkehub_FeatureSpecClusterupgrade";
import {
  Gkehub_FeatureSpecFleetobservability,
  Gkehub_FeatureSpecFleetobservability_GetTypes,
} from "./Gkehub_FeatureSpecFleetobservability";
import {
  Gkehub_FeatureSpecMulticlusteringress,
  Gkehub_FeatureSpecMulticlusteringress_GetTypes,
} from "./Gkehub_FeatureSpecMulticlusteringress";

export interface Gkehub_FeatureSpec {
  /*
Clusterupgrade feature spec.
Structure is documented below.
*/
  Clusterupgrade?: Gkehub_FeatureSpecClusterupgrade;

  /*
Fleet Observability feature spec.
Structure is documented below.
*/
  Fleetobservability?: Gkehub_FeatureSpecFleetobservability;

  /*
Multicluster Ingress-specific spec.
Structure is documented below.
*/
  Multiclusteringress?: Gkehub_FeatureSpecMulticlusteringress;
}

export function Gkehub_FeatureSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Clusterupgrade",
      "Clusterupgrade feature spec.\nStructure is documented below.",
      Gkehub_FeatureSpecClusterupgrade_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Fleetobservability",
      "Fleet Observability feature spec.\nStructure is documented below.",
      Gkehub_FeatureSpecFleetobservability_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Multiclusteringress",
      "Multicluster Ingress-specific spec.\nStructure is documented below.",
      Gkehub_FeatureSpecMulticlusteringress_GetTypes(),
      false,
      false,
    ),
  ];
}
