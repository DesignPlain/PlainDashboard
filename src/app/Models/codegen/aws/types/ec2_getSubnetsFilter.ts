import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getSubnetsFilter {
  /*
Name of the field to filter by, as defined by
[the underlying AWS API](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html).
For example, if matching against tag `Name`, use:

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const selected = aws.ec2.getSubnets({
    filters: [{
        name: "tag:Name",
        values: [""],
    }],
});
```
```python
import pulumi
import pulumi_aws as aws

selected = aws.ec2.get_subnets(filters=[{
    "name": "tag:Name",
    "values": [""],
}])
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var selected = Aws.Ec2.GetSubnets.Invoke(new()
    {
        Filters = new[]
        {
            new Aws.Ec2.Inputs.GetSubnetsFilterInputArgs
            {
                Name = "tag:Name",
                Values = new[]
                {
                    "",
                },
            },
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/ec2"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := ec2.GetSubnets(ctx, &ec2.GetSubnetsArgs{
			Filters: []ec2.GetSubnetsFilter{
				{
					Name: "tag:Name",
					Values: []string{
						"",
					},
				},
			},
		}, nil)
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
import com.pulumi.aws.ec2.Ec2Functions;
import com.pulumi.aws.ec2.inputs.GetSubnetsArgs;
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
        final var selected = Ec2Functions.getSubnets(GetSubnetsArgs.builder()
            .filters(GetSubnetsFilterArgs.builder()
                .name("tag:Name")
                .values("")
                .build())
            .build());

    }
}
```
```yaml
variables:
  selected:
    fn::invoke:
      Function: aws:ec2:getSubnets
      Arguments:
        filters:
          - name: tag:Name
            values:
              -
```
<!--End PulumiCodeChooser -->
*/
  name?: string;

  /*
Set of values that are accepted for the given field.
Subnet IDs will be selected if any one of the given values match.
*/
  values?: Array<string>;
}

export function ec2_getSubnetsFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the field to filter by, as defined by\n[the underlying AWS API](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html).\nFor example, if matching against tag `Name`, use:\n\n<!--Start PulumiCodeChooser -->\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst selected = aws.ec2.getSubnets({\n    filters: [{\n        name: "tag:Name",\n        values: [""],\n    }],\n});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\nselected = aws.ec2.get_subnets(filters=[{\n    "name": "tag:Name",\n    "values": [""],\n}])\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var selected = Aws.Ec2.GetSubnets.Invoke(new()\n    {\n        Filters = new[]\n        {\n            new Aws.Ec2.Inputs.GetSubnetsFilterInputArgs\n            {\n                Name = "tag:Name",\n                Values = new[]\n                {\n                    "",\n                },\n            },\n        },\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/ec2"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\t_, err := ec2.GetSubnets(ctx, &ec2.GetSubnetsArgs{\n\t\t\tFilters: []ec2.GetSubnetsFilter{\n\t\t\t\t{\n\t\t\t\t\tName: "tag:Name",\n\t\t\t\t\tValues: []string{\n\t\t\t\t\t\t"",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t}, nil)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n```java\npackage generated_program;\n\nimport com.pulumi.Context;\nimport com.pulumi.Pulumi;\nimport com.pulumi.core.Output;\nimport com.pulumi.aws.ec2.Ec2Functions;\nimport com.pulumi.aws.ec2.inputs.GetSubnetsArgs;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.io.File;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class App {\n    public static void main(String[] args) {\n        Pulumi.run(App::stack);\n    }\n\n    public static void stack(Context ctx) {\n        final var selected = Ec2Functions.getSubnets(GetSubnetsArgs.builder()\n            .filters(GetSubnetsFilterArgs.builder()\n                .name("tag:Name")\n                .values("")\n                .build())\n            .build());\n\n    }\n}\n```\n```yaml\nvariables:\n  selected:\n    fn::invoke:\n      Function: aws:ec2:getSubnets\n      Arguments:\n        filters:\n          - name: tag:Name\n            values:\n              -\n```\n<!--End PulumiCodeChooser -->',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Set of values that are accepted for the given field.\nSubnet IDs will be selected if any one of the given values match.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
