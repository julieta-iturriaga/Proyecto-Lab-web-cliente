export function generarEstrellas(rating, maxStars = 5) {
    let estrellasHtml = '';

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        estrellasHtml += '<i class="bi bi-star-fill text-warning"></i>';
    }

    if (hasHalfStar) {
        estrellasHtml += '<i class="bi bi-star-half text-warning"></i>';
    }

    for (let i = 0; i < emptyStars; i++) {
        estrellasHtml += '<i class="bi bi-star text-warning"></i>';
    }

    return estrellasHtml;
}
