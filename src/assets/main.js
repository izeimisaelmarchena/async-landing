const url = 'https://youtube-v3-lite.p.rapidapi.com/search?channelId=UCAgTLejxNyKysVZQTc6xNJQ&part=id%2Csnippet';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ee83ff35a1msh89aeff225826c4cp10a4e6jsne7a77ce9f702',
        'x-rapidapi-host': 'youtube-v3-lite.p.rapidapi.com'
    }
};

async function fetchData(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(url);
        const view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
                `).slice(0,4).join('')}
            `;
            content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();

