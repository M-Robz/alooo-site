<?php

// Sanitize form input
function clean($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// Config
$db = 'tbpgcpqd_alooo';
$dbTable = 'ownership';
$user = 'tbpgcpqd_guest';
$pw = 'zxcvb';

// Store contents of request
$type = $_POST['searchType'];
$string = clean($_POST['string']);

// Connect to database
$conn = new mysqli('localhost', $user, $pw, $db);
if ($conn->connect_error) {
  echo 'Error connecting to database';
  exit();
}

// Build query depending on search type, and execute
switch ($type) {
  case 'owner':
    $q =
      "SELECT * FROM ".$dbTable." ".
      "WHERE (LOCATE('".$string."', Manager) > 0) ".
      "ORDER BY Last, First, Year;";
    break;
  case 'lname':
    $q =
      "SELECT * FROM ".$dbTable." ".
      "WHERE (LOCATE('".$string."', Last) > 0) ".
      "ORDER BY Last, First, Year;";
    break;
  case 'linit':
    $q =
      "SELECT * FROM ".$dbTable." ".
      "WHERE (LEFT(Last, 1) = '".$string."') ".
      "ORDER BY Last, First, Year;";
    break;
  default:
    echo 'Error communicating with server';
    exit();
}
$result = $conn->query($q);

// Check whether any rows were selected
if ($result->num_rows > 0) {

  // Query for column names
  $colNameQ = "SELECT COLUMN_NAME
              FROM INFORMATION_SCHEMA.COLUMNS
              WHERE TABLE_SCHEMA='".$db."'
              AND TABLE_NAME='".$dbTable."';";
  $colNames = $conn->query($colNameQ);
  $numFields = $colNames->num_rows;

  // Build HTML for header row
  $tableHtml = '<tr>';
  while ($row = $colNames->fetch_row()) {
    $tableHtml .= '<th>'.$row[0].'</th>';
  }
  $tableHtml .= '</tr>';

  // Build HTML for body rows
  while ($row = $result->fetch_row()) {
    $tableHtml .= '<tr>';
    for ($i=0; $i<$numFields; $i++) {
      $tableHtml .= '<td>'.$row[$i].'</td>';
    }
    $tableHtml .= '</tr>';
  }

  // Respond with HTML
  echo $tableHtml;

} else {
  echo 'No results';
}

?>
