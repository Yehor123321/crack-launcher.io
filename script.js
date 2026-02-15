document.addEventListener('DOMContentLoaded', function() {
    const reviewsContainer = document.getElementById('reviews');

    // Array of fake review data
    const fakeReviews = [
        {
            author: "Алексей П.",
            rating: 5,
            text: "Отличный чит! Работает на всех серверах, которые я пробовал. Особенно нравится KillAura - убивает всех автоматически, пока я пью чай."
        },
        {
            author: "Дмитрий С.",
            rating: 4,
            text: "Флай работает отлично, но иногда банят. 300 FPS реально дает, игра стала очень плавной."
        },
        {
            author: "Иван К.",
            rating: 5,
            text: "Лучший чит, который я когда-либо использовал! Режим невидимости работает безупречно, можно подкрадываться и убивать врагов."
        },
        {
            author: "Сергей М.",
            rating: 3,
            text: "В целом нормально, но иногда вылетает. Water Speed работает отлично, но KillAura банят на некоторых серверах."
        },
        {
            author: "Анна В.",
            rating: 4,
            text: "Мой брат пользуется и очень доволен. Говорит, что теперь он лучший на сервере. Загрузка действительно быстрая."
        },
        {
            author: "Максим Т.",
            rating: 5,
            text: "Просто бомба! Все функции работают как заявлено. Особенно нравится оптимизация - игра летит даже на слабом ПК."
        },
        {
            author: "Олег Р.",
            rating: 4,
            text: "Хороший чит, но интерфейс мог бы быть получше. Функционал на высоте, особенно Fly и режим невидимости."
        },
        {
            author: "Никита Л.",
            rating: 3,
            text: "Работает, но иногда глючит. На некоторых серверах быстро банят."
        },
        {
            author: "Владимир Д.",
            rating: 5,
            text: "Просто невероятно! KillAura работает как часы, можно спокойно пить кофе и наблюдать за бойней. Супер!"
        },
        {
            author: "Егор С.",
            rating: 4,
            text: "Отличный чит. Все функции работают, но иногда приходится перезапускать клиент."
        },
        {
            author: "Артем Б.",
            rating: 5,
            text: "Лучший чит в моей жизни! Теперь я король на всех серверах. Особенно нравится Water Speed - плыву быстрее всех!"
        },
        {
            author: "Игорь Н.",
            rating: 3,
            text: "В целом нормально, но ожидал больше. Некоторые функции работают нестабильно."
        },
        {
            author: "Павел К.",
            rating: 4,
            text: "Хороший чит, особенно для новичков. Все просто и интуитивно понятно. Флай работает отлично на большинстве серверов."
        },
        {
            author: "Роман В.",
            rating: 5,
            text: "Просто вау! Все работает как по маслу. KillAura убивает всех подряд, Fly позволяет летать где угодно. Супер!"
        },
        {
            author: "Денис М.",
            rating: 4,
            text: "Отличный чит клиент. Все функции работают как заявлено. Единственный минус - иногда банят, но не часто."
        }
    ];

    // Generate review cards
    fakeReviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';

        const reviewHeader = document.createElement('div');
        reviewHeader.className = 'review-header';

        const reviewAuthor = document.createElement('div');
        reviewAuthor.className = 'review-author';
        reviewAuthor.textContent = review.author;

        const reviewRating = document.createElement('div');
        reviewRating.className = 'review-rating';
        reviewRating.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        const reviewText = document.createElement('div');
        reviewText.className = 'review-text';
        reviewText.textContent = review.text;

        reviewHeader.appendChild(reviewAuthor);
        reviewHeader.appendChild(reviewRating);

        reviewCard.appendChild(reviewHeader);
        reviewCard.appendChild(reviewText);

        reviewsContainer.appendChild(reviewCard);
    });
});