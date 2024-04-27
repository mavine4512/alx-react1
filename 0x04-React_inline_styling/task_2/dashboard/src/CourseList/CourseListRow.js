import React from "react";
import PropTypes from "props-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const headerStyle = { backgroundColor: "#f5f5f5ab" };
  const rowStyle = { backgroundColor: "#deb5b545" };
  const selectedStyle = isHeader ? headerStyle : rowStyle;

  return (
    <tr style={selectedStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseList.propTypes = {
  isHeader: ProPTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CourseList.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({});

export default CourseListRow;
