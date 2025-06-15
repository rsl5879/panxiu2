
document.getElementById('enter-material').addEventListener('click', function() {
    window.location.href = 'mural.html?ruins_name=盘锦&mark_name=all&address_name=all&currentpage=1&searth_key=all&data_order=all';
});


document.querySelector('.search-container button').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-container input');
    const keyword = searchInput.value.trim();
    
    if (keyword) {
        
        window.location.href = `mural.html?ruins_name=盘锦&mark_name=all&address_name=all&currentpage=1&searth_key=${encodeURIComponent(keyword)}&data_order=all`;
    }
});


document.querySelector('.search-container input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-container button').click();
    }
});


window.addEventListener('load', function() {
    const video = document.getElementById('bg-video');
    
    
    video.loop = false; 
    video.muted = true;
    
   
    video.preload = 'auto';
    
    
    video.addEventListener('timeupdate', function() {
        
        if (video.currentTime > video.duration - 0.5) {
            video.currentTime = 0;
            video.play().catch(e => console.log('播放错误:', e));
        }
    });
    
    
    video.addEventListener('progress', updateBufferStatus);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('canplaythrough', startPlayback);
    
    
    video.load();
    
    function updateBufferStatus() {
        if (video.buffered.length > 0) {
            const bufferedPercent = (video.buffered.end(0) / video.duration * 100).toFixed(2);
            console.log('缓冲进度:', bufferedPercent + '%');
        }
    }
    
    function handleVideoError() {
        console.error('视频错误:', video.error);
        
        if (video.error && video.error.code === 4) {
            const sources = video.querySelectorAll('source');
            if (sources.length > 1) {
                video.src = sources[1].src;
                video.load();
            }
        }
    }
    
    function startPlayback() {
       
        video.currentTime = Math.random() * (video.duration * 0.1);
        video.play().catch(e => {
            console.log('自动播放被阻止:', e);
            
            showPlayButton();
        });
    }
    
    function showPlayButton() {
        const playBtn = document.createElement('button');
        playBtn.textContent = '点击播放视频';
        playBtn.style.position = 'fixed';
        playBtn.style.bottom = '20px';
        playBtn.style.left = '50%';
        playBtn.style.transform = 'translateX(-50%)';
        playBtn.style.zIndex = '1000';
        playBtn.addEventListener('click', function() {
            video.play();
            playBtn.remove();
        });
        document.body.appendChild(playBtn);
    }
});
