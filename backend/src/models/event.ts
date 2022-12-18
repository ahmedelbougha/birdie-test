import { DataTypes, Model, InferAttributes } from "sequelize";
import sequelize from "../config/database";

class Event extends Model<InferAttributes<Event>> {
  declare id: string;
  declare care_recipient_id: string;
  declare event_type: string;
  declare timestamp: string;
  declare payload: unknown;
}

Event.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    care_recipient_id: {
      type: DataTypes.UUID,
    },
    event_type: {
      type: DataTypes.STRING,
    },
    timestamp: {
      type: DataTypes.DATE,
    },
    payload: {
      type: DataTypes.JSON,
    },
  },
  {
    tableName: "events",
    timestamps: false,
    sequelize,
  }
);

export default Event;
