import React, { useState } from "react";
import BlueButtonsRow from "./BlueButtonsRow";
import KeywordsTable from "./KeywordsTable";
import { saveAs } from "file-saver";
import { Box } from "@mui/system";
import * as XLSX from "xlsx";

const KeywordsManager = () => {
  const initialPositiveKeywords = [
    { id: 1, label: "6k car wallpaper for pc", isChecked: false },
    { id: 2, label: "4x4 car", isChecked: false },
    { id: 3, label: "6 carat diamond ring", isChecked: false },
  ];

  const initialNegativeKeywords = [
    { id: 4, label: "7 lakh car", isChecked: false },
    { id: 5, label: "5 lakh under car", isChecked: false },
    { id: 6, label: "5 seater car", isChecked: false },
  ];

  const [positiveKeywords, setPositiveKeywords] = useState(
    initialPositiveKeywords
  );
  const [negativeKeywords, setNegativeKeywords] = useState(
    initialNegativeKeywords
  );
  const [actionStack, setActionStack] = useState([]);

  const recordAction = () => {
    setActionStack((prevStack) => [
      ...prevStack,
      {
        positiveKeywords: [...positiveKeywords],
        negativeKeywords: [...negativeKeywords],
      },
    ]);
  };

  const moveKeyword = (sourceSetKeywords, targetSetKeywords, id) => {
    recordAction(); // Record state before making changes

    // Find keyword in either list
    const keywordToMove = positiveKeywords
      .concat(negativeKeywords)
      .find((kw) => kw.id === id);
    if (!keywordToMove) return;

    // Update both lists
    setPositiveKeywords((prev) => prev.filter((kw) => kw.id !== id));
    setNegativeKeywords((prev) => prev.filter((kw) => kw.id !== id));

    // Add the keyword to the target list
    if (sourceSetKeywords === setPositiveKeywords) {
      setNegativeKeywords((prev) => [
        ...prev,
        { ...keywordToMove, isChecked: false },
      ]);
    } else {
      setPositiveKeywords((prev) => [
        ...prev,
        { ...keywordToMove, isChecked: false },
      ]);
    }
  };

  const undoLastAction = () => {
    if (actionStack.length === 0) return;

    const lastAction = actionStack[actionStack.length - 1];
    setPositiveKeywords(lastAction.positiveKeywords);
    setNegativeKeywords(lastAction.negativeKeywords);

    // Remove the last action from the stack
    setActionStack((prevStack) => prevStack.slice(0, -1));
  };

  // Adjust your export functions and handlers accordingly...
  // Function to export data as CSV
  const exportDataAsCSV = (data, filename) => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => Object.values(row).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
  };

  const exportPositiveClick = () => {
    console.log();
    let i = 0; // Start ID from 0
    // Extract only the labels of positive keywords
    const positiveLabels = positiveKeywords.map((keyword) => ({
      // id: ++i, // Increment i and assign as ID
      label: keyword.label,
    }));
    // Export labels as CSV
    exportDataAsCSV(positiveLabels, "positive_keywords.csv");
  };

  const exportNegativeClick = () => {
    let i = 0; // Start ID from 0

    const negativeLabels = negativeKeywords.map((keyword) => ({
      // id: ++i, // Increment i and assign as ID
      label: keyword.label,
    }));

    // Export labels as CSV
    exportDataAsCSV(negativeLabels, "negative_keywords.csv");
  };

  const exportBothColumnsClick = () => {
    console.log("sdsdd");
    const worksheet = XLSX.utils.json_to_sheet([]);

    // Set headers
    XLSX.utils.sheet_add_aoa(
      worksheet,
      [["Positive Keywords", "Negative Keywords"]],
      { origin: "A1" }
    );

    // Style headers - bold and larger font
    const headerStyle = {
      font: { bold: true, sz: 14 },
    };
    worksheet["A1"].s = headerStyle;
    worksheet["B1"].s = headerStyle;

    // Add data starting from the second row
    positiveKeywords.forEach((keyword, index) => {
      XLSX.utils.sheet_add_aoa(worksheet, [[keyword.label]], {
        origin: `A${index + 2}`,
      });
    });

    negativeKeywords.forEach((keyword, index) => {
      XLSX.utils.sheet_add_aoa(worksheet, [[keyword.label]], {
        origin: `B${index + 2}`,
      });
    });

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Keywords");

    // Generate a buffer
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Create a Blob and download
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(blob, "keywords.xlsx");
  };

  return (
    <div>
      <BlueButtonsRow
        undoClick={undoLastAction}
        exportPositiveonClick={exportPositiveClick}
        exportNegativeonClick={exportNegativeClick}
        exportBoth={exportBothColumnsClick}
        sendSearchClick={() => {}}
      />
      <Box display={"flex"} gap={2}>
        <KeywordsTable
          keywords={positiveKeywords}
          onCheckboxChange={(id) =>
            moveKeyword(setPositiveKeywords, setNegativeKeywords, id)
          }
          setKeywords={setPositiveKeywords}
          title="Positive Keywords"
        />
        <KeywordsTable
          keywords={negativeKeywords}
          setKeywords={setNegativeKeywords}
          onCheckboxChange={(id) =>
            moveKeyword(setNegativeKeywords, setPositiveKeywords, id)
          }
          title="Negative Keywords"
        />
      </Box>
    </div>
  );
};

export default KeywordsManager;
