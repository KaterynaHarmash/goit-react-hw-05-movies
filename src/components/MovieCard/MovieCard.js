export const MovieCard = ({ id, posterUrl, title, yearRelease, voiteAvg }) => {
  return (
    <li class="movie-card" key={id}>
      <div class="movie-header manOfSteel"></div>
      <div class="movie-content">
        <div class="movie-content-header">
          <a href="#">
            <h3 class="movie-title">{title}</h3>
          </a>
        </div>
        <div class="movie-info">
          <div class="info-section">
            <label>Realese Year</label>
            <span>{yearRelease}</span>
          </div>
          <div class="info-section">
            <label>Rating</label>
            <span>{voiteAvg}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
