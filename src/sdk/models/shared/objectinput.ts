import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ObjectField } from "./objectfield";
import { Expose, Type } from "class-transformer";


export class ObjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "destination_id" })
  destinationId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "end_customer_id_field" })
  endCustomerIdField: string;

  @SpeakeasyMetadata()
  @Expose({ name: "namespace" })
  namespace: string;

  @SpeakeasyMetadata({ elemType: ObjectField })
  @Expose({ name: "object_fields" })
  @Type(() => ObjectField)
  objectFields?: ObjectField[];

  @SpeakeasyMetadata()
  @Expose({ name: "table_name" })
  tableName: string;
}