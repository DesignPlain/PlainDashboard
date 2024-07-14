import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkehub_FeatureSpecClusterupgrade,
  gkehub_FeatureSpecClusterupgrade_GetTypes,
} from "./gkehub_FeatureSpecClusterupgrade";
import {
  gkehub_FeatureSpecFleetobservability,
  gkehub_FeatureSpecFleetobservability_GetTypes,
} from "./gkehub_FeatureSpecFleetobservability";
import {
  gkehub_FeatureSpecMulticlusteringress,
  gkehub_FeatureSpecMulticlusteringress_GetTypes,
} from "./gkehub_FeatureSpecMulticlusteringress";

export interface gkehub_FeatureSpec {
  /*
Clusterupgrade feature spec.
Structure is documented below.
*/
  clusterupgrade?: gkehub_FeatureSpecClusterupgrade;

  /*
Fleet Observability feature spec.
Structure is documented below.
*/
  fleetobservability?: gkehub_FeatureSpecFleetobservability;

  /*
Multicluster Ingress-specific spec.
Structure is documented below.
*/
  multiclusteringress?: gkehub_FeatureSpecMulticlusteringress;
}

export function gkehub_FeatureSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "clusterupgrade",
      "Clusterupgrade feature spec.\nStructure is documented below.",
      gkehub_FeatureSpecClusterupgrade_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fleetobservability",
      "Fleet Observability feature spec.\nStructure is documented below.",
      gkehub_FeatureSpecFleetobservability_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "multiclusteringress",
      "Multicluster Ingress-specific spec.\nStructure is documented below.",
      gkehub_FeatureSpecMulticlusteringress_GetTypes(),
      false,
      false,
    ),
  ];
}
