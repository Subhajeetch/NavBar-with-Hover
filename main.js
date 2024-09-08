const data = {
  usersContent: `

      <div class="content-info">
         <h1>Manage Users</h1>
         <p>The users wil be displayed here!</p>
      </div>
    
    `,

  layoutContent: `

    <div class="content-info">
      <h1>Update Layout</h1>
      <p>You can update the layout here!</p>
    </div>

    `,
    
  logsContent:   `

      <div class="content-info">
        <h1>Audit Logs</h1>
        <p>The audit logs will be shown here!</p>
      </div>

    `,
    
    modContent: `
      <div class="content-info">
        <h1>Moderation</h1>
        <p>You can moderate users here!</p>
      </div>
    `,
    
    communityContent: `
      <div class="content-info">
        <h1>Community</h1>
        <p>You can post stuffs through here!</p>
      </div>
    `,
    
    insightContent: `
      <div class="content-info">
        <h1>Insights</h1>
        <p>See site insights here!</p>
      </div>
    `,
    
    commandsContent: `
      <div class="content-info">
        <h1>Command Panel</h1>
        <p>Execute commands here!</p>
      </div>
    `,
    
    userReportsContent: `
      <div class="content-info">
        <h1>User Reports</h1>
        <p>Handle user reports here!</p>
      </div>
    `,
    
    staffCornerContent: `
      <div class="content-info">
        <h1>Staff Corner</h1>
        <p>Staffs can have a chat here!</p>
      </div>
    `,
    
    donatesContent: `
      <div class="content-info">
        <h1>Donations</h1>
        <p>Donations will be show up here!</p>
      </div>
    `,
    
    serverStatusContent: `
      <div class="content-info">
        <h1>Server Status</h1>
        <p>Server status will be shown here!</p>
      </div>
    `,
    
    settingsContent: `
      <div class="content-info">
        <h1>Settings</h1>
        <p>Settings will be shown up here!</p>
      </div>
    `,
    
    logInOutContent: `
      <div class="content-info">
        <h1>Log Out</h1>
        <p>You can log out here!</p>
      </div>
    `
};



const sections = document.querySelectorAll('.section-container');

sections.forEach((section, index) => {
  section.addEventListener('click', () => {
    showContent(index + 1);  
  });
});






function showContent(value) {
  
  const content = document.querySelector('.js-content-loader');
  
  if (value === 1) {
    
    content.innerHTML = `${data.usersContent}`;
    
  } else if (value === 2) {
    
    content.innerHTML = `${data.layoutContent}`;
    
  } else if (value === 3) {
    
    content.innerHTML = `${data.logsContent}`;
    
  } else if (value === 4) {
    
    content.innerHTML = `${data.modContent}`;
    
  } else if (value === 5) {
    
    content.innerHTML = `${data.communityContent}`;
    
  } else if (value === 6) {
    
    content.innerHTML = `${data.insightContent}`;
    
  } else if (value === 7) {
    
    content.innerHTML = `${data.commandsContent}`;
    
  } else if (value === 8) {
    
    content.innerHTML = `${data.userReportsContent}`;
    
  } else if (value === 9) {
    
    content.innerHTML = `${data.staffCornerContent}`;
    
  } else if (value === 10) {
    
    content.innerHTML = `${data.donatesContent}`;
    
  } else if (value === 11) {
    
    content.innerHTML = `${data.serverStatusContent}`;
    
  } else if (value === 12) {
    
    content.innerHTML = `${data.settingsContent}`;
    
  } else if (value === 13) {
    
    content.innerHTML = `${data.logInOutContent}`;
    
  };
  
  
  
  function fadeEffect() {
    content.style.opacity = '';
    content.style.transition = '';
    
    content.style.opacity = 0;
    
    setTimeout(() => {
      content.style.transition = 'opacity 2s';
      content.style.opacity = '1';
    });
  };
  fadeEffect();
};




