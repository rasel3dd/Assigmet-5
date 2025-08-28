    let coins = 100;
    let heartCount = 0;
    let copyCount = 0;
    const history = [];

    
    const coin = document.getElementById('coinCount');
    const heart = document.getElementById('heartCount');
    const copy = document.getElementById('copyCount');
    const historyList = document.getElementById('historyList');
    const emptyHistory = document.getElementById('emptyHistory');

    // time
    function times(d=new Date()){
      const h = d.getHours().toString().padStart(2,'0');
      const m = d.getMinutes().toString().padStart(2,'0');
      const s = d.getSeconds().toString().padStart(2,'0');
      return `${h}:${m}:${s}`;
    }

    function historys(){
      historyList.innerHTML = history.map(item => `
        <li class="px-4 py-3 flex items-center justify-between">
          <div>
            <div class="font-medium">${item.name}</div>
            <div class="text-xs text-gray-500">${item.number}</div>
          </div>
          <div class="text-xs text-gray-400">${item.time}</div>
        </li>
      `).join('');
      emptyHistory.style.display = history.length ? 'none' : 'block';
    }

    // increase count
    document.querySelectorAll('.heart-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        heartCount++;
        heart.textContent = heartCount;
      });
    });

    // Copy button
    async function copys(number){
      
      copyCount++;
      copy.textContent = copyCount;
      alert(`Copied hotline: ${number}`);
    }

    document.querySelectorAll('.copy-btn').forEach(btn=>{
      btn.addEventListener('click', ()=> copys(btn.dataset.number));
    });

    // Call button
    function calls(name, number){
      if(coins < 20){
        alert('Insufficient coins. You need at least 20 coins to make a call.');
        return;
      }
      coins -= 20;
      coin.textContent = coins;
      alert(`Calling ${name} at ${number} `);
      history.unshift({name, number, time: times()});
      historys();
    }

    document.querySelectorAll('.call-btn').forEach(btn=>{
      btn.addEventListener('click', ()=> calls(btn.dataset.name, btn.dataset.number));
    });

    // Clear history
    document.getElementById('clearHistory').addEventListener('click', ()=>{
      if(!history.length)
         return;
      history.length = 0;
      historys();
    });

   
    historys();