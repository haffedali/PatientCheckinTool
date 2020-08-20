import * as React from "react";
import { List } from "office-ui-fabric-react/lib/List";
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';

import { IRectangle } from "office-ui-fabric-react/lib/Utilities";
import { useConst, useConstCallback } from "@uifabric/react-hooks";
import { IAppointmentItemProps, IListProps } from "../../interfaces";

import { AppointmentItem } from "./AppointmentItem";

const ROWS_PER_PAGE = 5;
const MAX_ROW_HEIGHT = 100;

export const ListContainer: React.FC<IListProps> = ({ items }) => {
  const columnCount = React.useRef(0);
  const rowHeight = React.useRef(0);

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
<<<<<<< HEAD
          <AppointmentItem
=======
          <AppointmentItemContainer
            time={item.time}
>>>>>>> ae953ee28ae34a7c650722db10e01ac713b125f6
            name={item.name}
            onMessageButtonClick={item.onMessageButtonClick}
            onCheckBoxClick={item.onCheckBoxClick}
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
          <List
            items={items}
            getItemCountForPage={getItemCountForPage}
            getPageHeight={getPageHeight}
            renderedWindowsAhead={4}
            onRenderCell={onRenderCell}
          />
      </div>
  );
};
