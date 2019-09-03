import React, {useState, useMemo, useEffect} from "react";
import Checkbox from "../Checkbox";
import VideoInfo from "../VideoInfo";
import PrintNumber from "../PrintNumber";
import PrintDate from "../PrintDate";
import {sortObjects} from "../../util/sort";
import Loader from "../Loader";
import "./style.css";

function Table({data, isLoading = false, selected, select, selectAll}) {
  const [sort, setSort] = useState(null);

  const sortinng = field => {
    if (sort && sort.field === field) {
      if (sort.order === "desc") {
        setSort(null);
        return;
      }
      setSort({
        field,
        order: "desc"
      });
    } else {
      setSort({
        field,
        order: "asc"
      });
    }
  };
  const getIconClassName = field => {
    if (sort && sort.field === field) {
      return `fa fa-sort-amount-${sort.order}`;
    }
    return "fa fa-sort";
  };

  const sortedData = useMemo(() => {
    return data && sortObjects(data, sort);
  }, [data, sort]);

  useEffect(() => {
    setSort(null)
  }, [data]);

  return (
    <div className="table">
      <div className="table-header table-row">
        <div className="header-column column column-min">
          Select
          <i className="fa fa-sort-desc" onClick={selectAll}/>
        </div>
        <div
          className="header-column column column-max"
          onClick={() => sortinng("id")}
        >
          Video
          <i className={getIconClassName("id")}/>
        </div>
        <div className="header-column column" onClick={() => sortinng("view")}>
          Views
          <i className={getIconClassName("view")}/>
        </div>
        <div className="header-column column" onClick={() => sortinng("like")}>
          Likes
          <i className={getIconClassName("like")}/>
        </div>
        <div
          className="header-column column"
          onClick={() => sortinng("dislikes")}
        >
          Dislikes
          <i className={getIconClassName("dislikes")}/>
        </div>
        <div
          className="header-column column"
          onClick={() => sortinng("comments")}
        >
          Comments
          <i className={getIconClassName("comments")}/>
        </div>
        <div
          className="header-column column"
          onClick={() => sortinng("published")}
        >
          Published
          <i className={getIconClassName("published")}/>
        </div>
      </div>
      <div>
        {isLoading && (
          <div className="table-loader">
            <Loader/>
          </div>
        )}
        {sortedData && sortedData.length === 0 && !isLoading && (
          <div className="table-empty">Nothing to display</div>
        )}
        {sortedData &&
        sortedData.map((row, key) => (
          <div key={key} className="table-body-row table-row">
            <div className="column column-center column-min">
              <Checkbox
                value={selected.includes(row.id)}
                onChange={() => {
                  select(row.id);
                }}
              />
            </div>
            <div className="column column-max video-container ">
              <VideoInfo id={row.video.id} info={row.video.desc}/>
            </div>
            <div className="column">
              <PrintNumber number={row.view}/>
            </div>
            <div className="column">
              <PrintNumber number={row.like}/>
            </div>
            <div className="column">
              <PrintNumber number={row.dislikes}/>
            </div>
            <div className="column">
              <PrintNumber number={row.comments}/>
            </div>
            <div className="column">
              <PrintDate ts={row.published}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
