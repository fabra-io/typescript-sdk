import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FieldMapping } from "./fieldmapping";
import { FrequencyUnitsEnum } from "./frequencyunitsenum";
import { Expose, Type } from "class-transformer";


export class Sync extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor_field" })
  cursorField?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "custom_join" })
  customJoin?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "destination_id" })
  destinationId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ elemType: FieldMapping })
  @Expose({ name: "field_mappings" })
  @Type(() => FieldMapping)
  fieldMappings?: FieldMapping[];

  @SpeakeasyMetadata()
  @Expose({ name: "frequency" })
  frequency?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "frequency_units" })
  frequencyUnits?: FrequencyUnitsEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "namespace" })
  namespace?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "object_id" })
  objectId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "primary_key" })
  primaryKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source_id" })
  sourceId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "table_name" })
  tableName?: string;
}