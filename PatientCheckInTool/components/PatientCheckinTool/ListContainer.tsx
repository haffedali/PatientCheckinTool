import * as React from "react";
import { List } from "office-ui-fabric-react/lib/List";
import {DetailsList} from "office-ui-fabric-react/lib/DetailsList";
import { IRectangle } from "office-ui-fabric-react/lib/Utilities";
import { useConstCallback } from "@uifabric/react-hooks";
import {Spinner} from "office-ui-fabric-react/lib/Spinner";
import { IAppointmentItemProps, IListProps } from "../../interfaces";

import { AppointmentItem } from "./AppointmentItem";
import { useAppContext } from "../../AppContext";

const ROWS_PER_PAGE = 5;
const MAX_ROW_HEIGHT = 100;

export const ListContainer: React.FC<IListProps> = ({ items }) => {
  const columnCount = React.useRef(0);
  const rowHeight = React.useRef(0);
  const appContext = useAppContext();

  const getItemCountForPage = useConstCallback(
    (itemIndex: number | undefined, surfaceRect: IRectangle | undefined) => {
      if (surfaceRect !== undefined) {
        if (itemIndex === 0) {
          columnCount.current = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
          rowHeight.current = Math.floor(
            surfaceRect.width / columnCount.current
          );
        }
        return columnCount.current * ROWS_PER_PAGE;
      } else {
        return columnCount.current * ROWS_PER_PAGE;
      }
    }
  );

  const onRenderCell = useConstCallback(
    (item: IAppointmentItemProps | undefined, index: number | undefined) => {
      if (item !== undefined) {
        return (
          <AppointmentItem
            // scheduledstart={item.scheduledstart}
            // scheduledend={item.scheduledend}
            // name={item.name}
            // subject={item.subject}
            {...item}
          />
        );
      }
    }
  );

  const getPageHeight = useConstCallback((): number => {
    return rowHeight.current * ROWS_PER_PAGE;
  });

  return (
    <div className={"ListContainer"}>
      {
        console.log(appContext.loaded)
      }
      {
        appContext.loaded
          ? <List
            items={items}
            getItemCountForPage={getItemCountForPage}
            getPageHeight={getPageHeight}
            renderedWindowsAhead={4}
            onRenderCell={onRenderCell}
          />
          : <Spinner label="loading your records..." ariaLive="assertive" labelPosition="top" />

      }
    </div>
  );
};
