import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  autoscaling_PolicyPredictiveScalingConfiguration,
  autoscaling_PolicyPredictiveScalingConfiguration_GetTypes,
} from "../types/autoscaling_PolicyPredictiveScalingConfiguration";
import {
  autoscaling_PolicyStepAdjustment,
  autoscaling_PolicyStepAdjustment_GetTypes,
} from "../types/autoscaling_PolicyStepAdjustment";
import {
  autoscaling_PolicyTargetTrackingConfiguration,
  autoscaling_PolicyTargetTrackingConfiguration_GetTypes,
} from "../types/autoscaling_PolicyTargetTrackingConfiguration";

export interface PolicyArgs {
  // Predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.
  predictiveScalingConfiguration?: autoscaling_PolicyPredictiveScalingConfiguration;

  /*
Number of members by which to
scale, when the adjustment bounds are breached. A positive value scales
up. A negative value scales down.
*/
  scalingAdjustment?: number;

  /*
Set of adjustments that manage
group scaling. These have the following structure:

```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const example = new aws.autoscaling.Policy("example", {stepAdjustments: [
    {
        scalingAdjustment: -1,
        metricIntervalLowerBound: "1",
        metricIntervalUpperBound: "2",
    },
    {
        scalingAdjustment: 1,
        metricIntervalLowerBound: "2",
        metricIntervalUpperBound: "3",
    },
]});
```
```python
import pulumi
import pulumi_aws as aws

example = aws.autoscaling.Policy("example", step_adjustments=[
    aws.autoscaling.PolicyStepAdjustmentArgs(
        scaling_adjustment=-1,
        metric_interval_lower_bound="1",
        metric_interval_upper_bound="2",
    ),
    aws.autoscaling.PolicyStepAdjustmentArgs(
        scaling_adjustment=1,
        metric_interval_lower_bound="2",
        metric_interval_upper_bound="3",
    ),
])
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var example = new Aws.AutoScaling.Policy("example", new()
    {
        StepAdjustments = new[]
        {
            new Aws.AutoScaling.Inputs.PolicyStepAdjustmentArgs
            {
                ScalingAdjustment = -1,
                MetricIntervalLowerBound = "1",
                MetricIntervalUpperBound = "2",
            },
            new Aws.AutoScaling.Inputs.PolicyStepAdjustmentArgs
            {
                ScalingAdjustment = 1,
                MetricIntervalLowerBound = "2",
                MetricIntervalUpperBound = "3",
            },
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/autoscaling"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := autoscaling.NewPolicy(ctx, "example", &autoscaling.PolicyArgs{
			StepAdjustments: autoscaling.PolicyStepAdjustmentArray{
				&autoscaling.PolicyStepAdjustmentArgs{
					ScalingAdjustment:        -1,
					MetricIntervalLowerBound: pulumi.String("1"),
					MetricIntervalUpperBound: pulumi.String("2"),
				},
				&autoscaling.PolicyStepAdjustmentArgs{
					ScalingAdjustment:        pulumi.Int(1),
					MetricIntervalLowerBound: pulumi.String("2"),
					MetricIntervalUpperBound: pulumi.String("3"),
				},
			},
		})
		if err != nil {
			return err
		}
		return nil
	})
}
```

The following fields are available in step adjustments:
*/
  stepAdjustments?: Array<autoscaling_PolicyStepAdjustment>;

  /*
Target tracking policy. These have the following structure:

```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const example = new aws.autoscaling.Policy("example", {targetTrackingConfiguration: {
    predefinedMetricSpecification: {
        predefinedMetricType: "ASGAverageCPUUtilization",
    },
    targetValue: 40,
}});
```
```python
import pulumi
import pulumi_aws as aws

example = aws.autoscaling.Policy("example", target_tracking_configuration=aws.autoscaling.PolicyTargetTrackingConfigurationArgs(
    predefined_metric_specification=aws.autoscaling.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs(
        predefined_metric_type="ASGAverageCPUUtilization",
    ),
    target_value=40,
))
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var example = new Aws.AutoScaling.Policy("example", new()
    {
        TargetTrackingConfiguration = new Aws.AutoScaling.Inputs.PolicyTargetTrackingConfigurationArgs
        {
            PredefinedMetricSpecification = new Aws.AutoScaling.Inputs.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs
            {
                PredefinedMetricType = "ASGAverageCPUUtilization",
            },
            TargetValue = 40,
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/autoscaling"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := autoscaling.NewPolicy(ctx, "example", &autoscaling.PolicyArgs{
			TargetTrackingConfiguration: &autoscaling.PolicyTargetTrackingConfigurationArgs{
				PredefinedMetricSpecification: &autoscaling.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs{
					PredefinedMetricType: pulumi.String("ASGAverageCPUUtilization"),
				},
				TargetValue: pulumi.Float64(40),
			},
		})
		if err != nil {
			return err
		}
		return nil
	})
}
```
```java
package generated_program;

import com.pulumi.Context;
import com.pulumi.Pulumi;
import com.pulumi.core.Output;
import com.pulumi.aws.autoscaling.Policy;
import com.pulumi.aws.autoscaling.PolicyArgs;
import com.pulumi.aws.autoscaling.inputs.PolicyTargetTrackingConfigurationArgs;
import com.pulumi.aws.autoscaling.inputs.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

public class App {
    public static void main(String[] args) {
        Pulumi.run(App::stack);
    }

    public static void stack(Context ctx) {
        var example = new Policy("example", PolicyArgs.builder()        
            .targetTrackingConfiguration(PolicyTargetTrackingConfigurationArgs.builder()
                .predefinedMetricSpecification(PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs.builder()
                    .predefinedMetricType("ASGAverageCPUUtilization")
                    .build())
                .targetValue(40)
                .build())
            .build());

    }
}
```
```yaml
resources:
  example:
    type: aws:autoscaling:Policy
    properties:
      targetTrackingConfiguration:
        predefinedMetricSpecification:
          predefinedMetricType: ASGAverageCPUUtilization
        targetValue: 40
```

The following fields are available in target tracking configuration:
*/
  targetTrackingConfiguration?: autoscaling_PolicyTargetTrackingConfiguration;

  // Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start.
  cooldown?: number;

  // Estimated time, in seconds, until a newly launched instance will contribute CloudWatch metrics. Without a value, AWS will default to the group's specified cooldown period.
  estimatedInstanceWarmup?: number;

  /*
Minimum value to scale by when `adjustment_type` is set to `PercentChangeInCapacity`.

The following arguments are only available to "SimpleScaling" type policies:
*/
  minAdjustmentMagnitude?: number;

  // Policy type, either "SimpleScaling", "StepScaling", "TargetTrackingScaling", or "PredictiveScaling". If this value isn't provided, AWS will default to "SimpleScaling."
  policyType?: string;

  // Name of the policy.
  name?: string;

  // Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
  adjustmentType?: string;

  // Name of the autoscaling group.
  autoscalingGroupName?: string;

  /*
Whether the scaling policy is enabled or disabled. Default: `true`.

The following argument is only available to "SimpleScaling" and "StepScaling" type policies:
*/
  enabled?: boolean;

  // Aggregation type for the policy's metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average".
  metricAggregationType?: string;
}
export class Policy extends Resource {
  // ARN assigned by AWS to the scaling policy.
  public arn?: string;

  /*
Minimum value to scale by when `adjustment_type` is set to `PercentChangeInCapacity`.

The following arguments are only available to "SimpleScaling" type policies:
*/
  public minAdjustmentMagnitude?: number;

  // Predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.
  public predictiveScalingConfiguration?: autoscaling_PolicyPredictiveScalingConfiguration;

  /*
Number of members by which to
scale, when the adjustment bounds are breached. A positive value scales
up. A negative value scales down.
*/
  public scalingAdjustment?: number;

  // Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
  public adjustmentType?: string;

  /*
Whether the scaling policy is enabled or disabled. Default: `true`.

The following argument is only available to "SimpleScaling" and "StepScaling" type policies:
*/
  public enabled?: boolean;

  // Aggregation type for the policy's metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average".
  public metricAggregationType?: string;

  /*
Set of adjustments that manage
group scaling. These have the following structure:

```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const example = new aws.autoscaling.Policy("example", {stepAdjustments: [
    {
        scalingAdjustment: -1,
        metricIntervalLowerBound: "1",
        metricIntervalUpperBound: "2",
    },
    {
        scalingAdjustment: 1,
        metricIntervalLowerBound: "2",
        metricIntervalUpperBound: "3",
    },
]});
```
```python
import pulumi
import pulumi_aws as aws

example = aws.autoscaling.Policy("example", step_adjustments=[
    aws.autoscaling.PolicyStepAdjustmentArgs(
        scaling_adjustment=-1,
        metric_interval_lower_bound="1",
        metric_interval_upper_bound="2",
    ),
    aws.autoscaling.PolicyStepAdjustmentArgs(
        scaling_adjustment=1,
        metric_interval_lower_bound="2",
        metric_interval_upper_bound="3",
    ),
])
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var example = new Aws.AutoScaling.Policy("example", new()
    {
        StepAdjustments = new[]
        {
            new Aws.AutoScaling.Inputs.PolicyStepAdjustmentArgs
            {
                ScalingAdjustment = -1,
                MetricIntervalLowerBound = "1",
                MetricIntervalUpperBound = "2",
            },
            new Aws.AutoScaling.Inputs.PolicyStepAdjustmentArgs
            {
                ScalingAdjustment = 1,
                MetricIntervalLowerBound = "2",
                MetricIntervalUpperBound = "3",
            },
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/autoscaling"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := autoscaling.NewPolicy(ctx, "example", &autoscaling.PolicyArgs{
			StepAdjustments: autoscaling.PolicyStepAdjustmentArray{
				&autoscaling.PolicyStepAdjustmentArgs{
					ScalingAdjustment:        -1,
					MetricIntervalLowerBound: pulumi.String("1"),
					MetricIntervalUpperBound: pulumi.String("2"),
				},
				&autoscaling.PolicyStepAdjustmentArgs{
					ScalingAdjustment:        pulumi.Int(1),
					MetricIntervalLowerBound: pulumi.String("2"),
					MetricIntervalUpperBound: pulumi.String("3"),
				},
			},
		})
		if err != nil {
			return err
		}
		return nil
	})
}
```

The following fields are available in step adjustments:
*/
  public stepAdjustments?: Array<autoscaling_PolicyStepAdjustment>;

  /*
Target tracking policy. These have the following structure:

```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const example = new aws.autoscaling.Policy("example", {targetTrackingConfiguration: {
    predefinedMetricSpecification: {
        predefinedMetricType: "ASGAverageCPUUtilization",
    },
    targetValue: 40,
}});
```
```python
import pulumi
import pulumi_aws as aws

example = aws.autoscaling.Policy("example", target_tracking_configuration=aws.autoscaling.PolicyTargetTrackingConfigurationArgs(
    predefined_metric_specification=aws.autoscaling.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs(
        predefined_metric_type="ASGAverageCPUUtilization",
    ),
    target_value=40,
))
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var example = new Aws.AutoScaling.Policy("example", new()
    {
        TargetTrackingConfiguration = new Aws.AutoScaling.Inputs.PolicyTargetTrackingConfigurationArgs
        {
            PredefinedMetricSpecification = new Aws.AutoScaling.Inputs.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs
            {
                PredefinedMetricType = "ASGAverageCPUUtilization",
            },
            TargetValue = 40,
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/autoscaling"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := autoscaling.NewPolicy(ctx, "example", &autoscaling.PolicyArgs{
			TargetTrackingConfiguration: &autoscaling.PolicyTargetTrackingConfigurationArgs{
				PredefinedMetricSpecification: &autoscaling.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs{
					PredefinedMetricType: pulumi.String("ASGAverageCPUUtilization"),
				},
				TargetValue: pulumi.Float64(40),
			},
		})
		if err != nil {
			return err
		}
		return nil
	})
}
```
```java
package generated_program;

import com.pulumi.Context;
import com.pulumi.Pulumi;
import com.pulumi.core.Output;
import com.pulumi.aws.autoscaling.Policy;
import com.pulumi.aws.autoscaling.PolicyArgs;
import com.pulumi.aws.autoscaling.inputs.PolicyTargetTrackingConfigurationArgs;
import com.pulumi.aws.autoscaling.inputs.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

public class App {
    public static void main(String[] args) {
        Pulumi.run(App::stack);
    }

    public static void stack(Context ctx) {
        var example = new Policy("example", PolicyArgs.builder()        
            .targetTrackingConfiguration(PolicyTargetTrackingConfigurationArgs.builder()
                .predefinedMetricSpecification(PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs.builder()
                    .predefinedMetricType("ASGAverageCPUUtilization")
                    .build())
                .targetValue(40)
                .build())
            .build());

    }
}
```
```yaml
resources:
  example:
    type: aws:autoscaling:Policy
    properties:
      targetTrackingConfiguration:
        predefinedMetricSpecification:
          predefinedMetricType: ASGAverageCPUUtilization
        targetValue: 40
```

The following fields are available in target tracking configuration:
*/
  public targetTrackingConfiguration?: autoscaling_PolicyTargetTrackingConfiguration;

  // Name of the autoscaling group.
  public autoscalingGroupName?: string;

  // Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start.
  public cooldown?: number;

  // Estimated time, in seconds, until a newly launched instance will contribute CloudWatch metrics. Without a value, AWS will default to the group's specified cooldown period.
  public estimatedInstanceWarmup?: number;

  // Name of the policy.
  public name?: string;

  // Policy type, either "SimpleScaling", "StepScaling", "TargetTrackingScaling", or "PredictiveScaling". If this value isn't provided, AWS will default to "SimpleScaling."
  public policyType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the policy.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoscalingGroupName",
        "Name of the autoscaling group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "metricAggregationType",
        'Aggregation type for the policy\'s metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "stepAdjustments",
        'Set of adjustments that manage\ngroup scaling. These have the following structure:\n\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst example = new aws.autoscaling.Policy("example", {stepAdjustments: [\n    {\n        scalingAdjustment: -1,\n        metricIntervalLowerBound: "1",\n        metricIntervalUpperBound: "2",\n    },\n    {\n        scalingAdjustment: 1,\n        metricIntervalLowerBound: "2",\n        metricIntervalUpperBound: "3",\n    },\n]});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\nexample = aws.autoscaling.Policy("example", step_adjustments=[\n    aws.autoscaling.PolicyStepAdjustmentArgs(\n        scaling_adjustment=-1,\n        metric_interval_lower_bound="1",\n        metric_interval_upper_bound="2",\n    ),\n    aws.autoscaling.PolicyStepAdjustmentArgs(\n        scaling_adjustment=1,\n        metric_interval_lower_bound="2",\n        metric_interval_upper_bound="3",\n    ),\n])\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var example = new Aws.AutoScaling.Policy("example", new()\n    {\n        StepAdjustments = new[]\n        {\n            new Aws.AutoScaling.Inputs.PolicyStepAdjustmentArgs\n            {\n                ScalingAdjustment = -1,\n                MetricIntervalLowerBound = "1",\n                MetricIntervalUpperBound = "2",\n            },\n            new Aws.AutoScaling.Inputs.PolicyStepAdjustmentArgs\n            {\n                ScalingAdjustment = 1,\n                MetricIntervalLowerBound = "2",\n                MetricIntervalUpperBound = "3",\n            },\n        },\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/autoscaling"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\t_, err := autoscaling.NewPolicy(ctx, "example", &autoscaling.PolicyArgs{\n\t\t\tStepAdjustments: autoscaling.PolicyStepAdjustmentArray{\n\t\t\t\t&autoscaling.PolicyStepAdjustmentArgs{\n\t\t\t\t\tScalingAdjustment:        -1,\n\t\t\t\t\tMetricIntervalLowerBound: pulumi.String("1"),\n\t\t\t\t\tMetricIntervalUpperBound: pulumi.String("2"),\n\t\t\t\t},\n\t\t\t\t&autoscaling.PolicyStepAdjustmentArgs{\n\t\t\t\t\tScalingAdjustment:        pulumi.Int(1),\n\t\t\t\t\tMetricIntervalLowerBound: pulumi.String("2"),\n\t\t\t\t\tMetricIntervalUpperBound: pulumi.String("3"),\n\t\t\t\t},\n\t\t\t},\n\t\t})\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n\nThe following fields are available in step adjustments:',
        autoscaling_PolicyStepAdjustment_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "minAdjustmentMagnitude",
        'Minimum value to scale by when `adjustment_type` is set to `PercentChangeInCapacity`.\n\nThe following arguments are only available to "SimpleScaling" type policies:',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "targetTrackingConfiguration",
        'Target tracking policy. These have the following structure:\n\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst example = new aws.autoscaling.Policy("example", {targetTrackingConfiguration: {\n    predefinedMetricSpecification: {\n        predefinedMetricType: "ASGAverageCPUUtilization",\n    },\n    targetValue: 40,\n}});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\nexample = aws.autoscaling.Policy("example", target_tracking_configuration=aws.autoscaling.PolicyTargetTrackingConfigurationArgs(\n    predefined_metric_specification=aws.autoscaling.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs(\n        predefined_metric_type="ASGAverageCPUUtilization",\n    ),\n    target_value=40,\n))\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var example = new Aws.AutoScaling.Policy("example", new()\n    {\n        TargetTrackingConfiguration = new Aws.AutoScaling.Inputs.PolicyTargetTrackingConfigurationArgs\n        {\n            PredefinedMetricSpecification = new Aws.AutoScaling.Inputs.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs\n            {\n                PredefinedMetricType = "ASGAverageCPUUtilization",\n            },\n            TargetValue = 40,\n        },\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/autoscaling"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\t_, err := autoscaling.NewPolicy(ctx, "example", &autoscaling.PolicyArgs{\n\t\t\tTargetTrackingConfiguration: &autoscaling.PolicyTargetTrackingConfigurationArgs{\n\t\t\t\tPredefinedMetricSpecification: &autoscaling.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs{\n\t\t\t\t\tPredefinedMetricType: pulumi.String("ASGAverageCPUUtilization"),\n\t\t\t\t},\n\t\t\t\tTargetValue: pulumi.Float64(40),\n\t\t\t},\n\t\t})\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n```java\npackage generated_program;\n\nimport com.pulumi.Context;\nimport com.pulumi.Pulumi;\nimport com.pulumi.core.Output;\nimport com.pulumi.aws.autoscaling.Policy;\nimport com.pulumi.aws.autoscaling.PolicyArgs;\nimport com.pulumi.aws.autoscaling.inputs.PolicyTargetTrackingConfigurationArgs;\nimport com.pulumi.aws.autoscaling.inputs.PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.io.File;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class App {\n    public static void main(String[] args) {\n        Pulumi.run(App::stack);\n    }\n\n    public static void stack(Context ctx) {\n        var example = new Policy("example", PolicyArgs.builder()        \n            .targetTrackingConfiguration(PolicyTargetTrackingConfigurationArgs.builder()\n                .predefinedMetricSpecification(PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs.builder()\n                    .predefinedMetricType("ASGAverageCPUUtilization")\n                    .build())\n                .targetValue(40)\n                .build())\n            .build());\n\n    }\n}\n```\n```yaml\nresources:\n  example:\n    type: aws:autoscaling:Policy\n    properties:\n      targetTrackingConfiguration:\n        predefinedMetricSpecification:\n          predefinedMetricType: ASGAverageCPUUtilization\n        targetValue: 40\n```\n\nThe following fields are available in target tracking configuration:',
        autoscaling_PolicyTargetTrackingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "cooldown",
        "Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "estimatedInstanceWarmup",
        "Estimated time, in seconds, until a newly launched instance will contribute CloudWatch metrics. Without a value, AWS will default to the group's specified cooldown period.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyType",
        'Policy type, either "SimpleScaling", "StepScaling", "TargetTrackingScaling", or "PredictiveScaling". If this value isn\'t provided, AWS will default to "SimpleScaling."',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "adjustmentType",
        "Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        'Whether the scaling policy is enabled or disabled. Default: `true`.\n\nThe following argument is only available to "SimpleScaling" and "StepScaling" type policies:',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "predictiveScalingConfiguration",
        "Predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.",
        autoscaling_PolicyPredictiveScalingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "scalingAdjustment",
        "Number of members by which to\nscale, when the adjustment bounds are breached. A positive value scales\nup. A negative value scales down.",
        [],
        false,
        false,
      ),
    ];
  }
}
