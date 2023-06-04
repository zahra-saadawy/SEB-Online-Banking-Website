// Sample notifications data (replace with your own data)
const notifications = [
    { date: '2023-05-21', importance: 'H', subject: 'someone trying to login', message: 'Notification 1' },
    { date: '2022-03-10', importance: 'L', subject: 'offers', message: 'Notification 2' },
    { date: '2021-10-07', importance: 'M', subject: 'change password', message: 'Notification 3' },
    { date: '2023-01-01', importance: 'M', subject: 'transaction successfully', message: 'Notification 4' },
  ];
  
  // Function to generate table rows for notifications
  function generateNotificationRows() {
    const tableBody = document.querySelector('#notificationsTable tbody');
  
    // Clear existing table rows
    tableBody.innerHTML = '';
  
    // Generate new table rows
    notifications.forEach(notification => {
      const row = document.createElement('tr');
      const dateCell = document.createElement('td');
      const importanceCell = document.createElement('td');
      const subjectCell = document.createElement('td');
      const messageCell = document.createElement('td');
  
      dateCell.textContent = notification.date;
      importanceCell.textContent = notification.importance;
      subjectCell.textContent = notification.subject;
      messageCell.textContent = notification.message;
  
      row.appendChild(dateCell);
      row.appendChild(importanceCell);
      row.appendChild(subjectCell);
      row.appendChild(messageCell);
  
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to initially populate the table
  generateNotificationRows();
  