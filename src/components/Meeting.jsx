import React, { useEffect } from 'react';
import './style/meeting.css';

const Meeting = () => {
  useEffect(() => {
    const getUrlParams = (url) => {
      let urlStr = url.split('?')[1];
      const urlSearchParams = new URLSearchParams(urlStr);
      return Object.fromEntries(urlSearchParams.entries());
    };

    const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + "");
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = "userName" + userID;
    const appID = 505608150;
    const serverSecret = "5188b7d81d364341a175301aa0d688ac";
    const kitToken = window.ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

    const zp = window.ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: document.querySelector("#root"),
      sharedLinks: [{
        name: 'Personal link',
        url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
      }],
      scenario: {
        mode: window.ZegoUIKitPrebuilt.VideoConference,
      },
      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTextChat: true,
      showUserList: true,
      maxUsers: 2,
      layout: "Auto",
      showLayoutButton: false,
    });

    // JavaScript functionality
    const handleSidebarToggle = (e) => {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const handleDocumentClick = (e) => {
      if (!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
        document.querySelector('.chat-sidebar-profile').classList.remove('active');
      }
      if (!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
        document.querySelectorAll('.conversation-item-dropdown').forEach((i) => {
          i.classList.remove('active');
        });
      }
    };

    const handleConversationDropdownToggle = (e) => {
      e.preventDefault();
      const parent = e.currentTarget.parentElement;
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        document.querySelectorAll('.conversation-item-dropdown').forEach((i) => {
          i.classList.remove('active');
        });
        parent.classList.add('active');
      }
    };

    const handleConversationInput = (e) => {
      e.currentTarget.rows = e.currentTarget.value.split('\n').length;
    };

    const handleConversationClick = (e) => {
      e.preventDefault();
      const conversationId = e.currentTarget.dataset.conversation;
      document.querySelectorAll('.conversation').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelector(conversationId).classList.add('active');
    };

    const handleConversationBack = (e) => {
      e.preventDefault();
      e.currentTarget.closest('.conversation').classList.remove('active');
      document.querySelector('.conversation-default').classList.add('active');
    };

    document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', handleSidebarToggle);
    document.addEventListener('click', handleDocumentClick);
    document.querySelectorAll('.conversation-item-dropdown-toggle').forEach((item) => {
      item.addEventListener('click', handleConversationDropdownToggle);
    });
    document.querySelectorAll('.conversation-form-input').forEach((item) => {
      item.addEventListener('input', handleConversationInput);
    });
    document.querySelectorAll('[data-conversation]').forEach((item) => {
      item.addEventListener('click', handleConversationClick);
    });
    document.querySelectorAll('.conversation-back').forEach((item) => {
      item.addEventListener('click', handleConversationBack);
    });

    return () => {
      document.querySelector('.chat-sidebar-profile-toggle').removeEventListener('click', handleSidebarToggle);
      document.removeEventListener('click', handleDocumentClick);
      document.querySelectorAll('.conversation-item-dropdown-toggle').forEach((item) => {
        item.removeEventListener('click', handleConversationDropdownToggle);
      });
      document.querySelectorAll('.conversation-form-input').forEach((item) => {
        item.removeEventListener('input', handleConversationInput);
      });
      document.querySelectorAll('[data-conversation]').forEach((item) => {
        item.removeEventListener('click', handleConversationClick);
      });
      document.querySelectorAll('.conversation-back').forEach((item) => {
        item.removeEventListener('click', handleConversationBack);
      });
    };
  }, []);

  return <div id="root"></div>;
};

export default Meeting;
