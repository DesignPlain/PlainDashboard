import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption,
  quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption';
import {
  quicksight_DashboardDashboardPublishOptionsExportToCsvOption,
  quicksight_DashboardDashboardPublishOptionsExportToCsvOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsExportToCsvOption';
import {
  quicksight_DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption,
  quicksight_DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption';
import {
  quicksight_DashboardDashboardPublishOptionsDataPointDrillUpDownOption,
  quicksight_DashboardDashboardPublishOptionsDataPointDrillUpDownOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsDataPointDrillUpDownOption';
import {
  quicksight_DashboardDashboardPublishOptionsDataPointMenuLabelOption,
  quicksight_DashboardDashboardPublishOptionsDataPointMenuLabelOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsDataPointMenuLabelOption';
import {
  quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption,
  quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption';
import {
  quicksight_DashboardDashboardPublishOptionsExportWithHiddenFieldsOption,
  quicksight_DashboardDashboardPublishOptionsExportWithHiddenFieldsOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsExportWithHiddenFieldsOption';
import {
  quicksight_DashboardDashboardPublishOptionsAdHocFilteringOption,
  quicksight_DashboardDashboardPublishOptionsAdHocFilteringOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsAdHocFilteringOption';
import {
  quicksight_DashboardDashboardPublishOptionsSheetControlsOption,
  quicksight_DashboardDashboardPublishOptionsSheetControlsOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsSheetControlsOption';
import {
  quicksight_DashboardDashboardPublishOptionsVisualMenuOption,
  quicksight_DashboardDashboardPublishOptionsVisualMenuOption_GetTypes,
} from './quicksight_DashboardDashboardPublishOptionsVisualMenuOption';

export interface quicksight_DashboardDashboardPublishOptions {
  // The drill-down options of data points in a dashboard. See data_point_drill_up_down_option.
  dataPointDrillUpDownOption?: quicksight_DashboardDashboardPublishOptionsDataPointDrillUpDownOption;

  // The data point menu label options of a dashboard. See data_point_menu_label_option.
  dataPointMenuLabelOption?: quicksight_DashboardDashboardPublishOptionsDataPointMenuLabelOption;

  // The data point tool tip options of a dashboard. See data_point_tooltip_option.
  dataPointTooltipOption?: quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption;

  // Determines if hidden fields are exported with a dashboard. See export_with_hidden_fields_option.
  exportWithHiddenFieldsOption?: quicksight_DashboardDashboardPublishOptionsExportWithHiddenFieldsOption;

  // The axis sort options of a dashboard. See visual_axis_sort_option.
  visualAxisSortOption?: quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption;

  // Ad hoc (one-time) filtering option. See ad_hoc_filtering_option.
  adHocFilteringOption?: quicksight_DashboardDashboardPublishOptionsAdHocFilteringOption;

  // Export to .csv option. See export_to_csv_option.
  exportToCsvOption?: quicksight_DashboardDashboardPublishOptionsExportToCsvOption;

  // Sheet controls option. See sheet_controls_option.
  sheetControlsOption?: quicksight_DashboardDashboardPublishOptionsSheetControlsOption;

  // The sheet layout maximization options of a dashboard. See sheet_layout_element_maximization_option.
  sheetLayoutElementMaximizationOption?: quicksight_DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption;

  // The menu options of a visual in a dashboard. See visual_menu_option.
  visualMenuOption?: quicksight_DashboardDashboardPublishOptionsVisualMenuOption;
}

export function quicksight_DashboardDashboardPublishOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'exportToCsvOption',
      'Export to .csv option. See export_to_csv_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsExportToCsvOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sheetLayoutElementMaximizationOption',
      'The sheet layout maximization options of a dashboard. See sheet_layout_element_maximization_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dataPointDrillUpDownOption',
      'The drill-down options of data points in a dashboard. See data_point_drill_up_down_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsDataPointDrillUpDownOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dataPointMenuLabelOption',
      'The data point menu label options of a dashboard. See data_point_menu_label_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsDataPointMenuLabelOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dataPointTooltipOption',
      'The data point tool tip options of a dashboard. See data_point_tooltip_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsDataPointTooltipOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'exportWithHiddenFieldsOption',
      'Determines if hidden fields are exported with a dashboard. See export_with_hidden_fields_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsExportWithHiddenFieldsOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'visualAxisSortOption',
      'The axis sort options of a dashboard. See visual_axis_sort_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsVisualAxisSortOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'adHocFilteringOption',
      'Ad hoc (one-time) filtering option. See ad_hoc_filtering_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsAdHocFilteringOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sheetControlsOption',
      'Sheet controls option. See sheet_controls_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsSheetControlsOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'visualMenuOption',
      'The menu options of a visual in a dashboard. See visual_menu_option.',
      () =>
        quicksight_DashboardDashboardPublishOptionsVisualMenuOption_GetTypes(),
      false,
      false,
    ),
  ];
}
