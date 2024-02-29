import { useState } from "react";

function ListBox({ animes, onSelectedAnime }) {
  const [isOpen1, setIsOpen1] = useState(true);

  
  
	return (
		<div className="box">
			<button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
				{isOpen1 ? "–" : "+"}
			</button>
			{isOpen1 && (
				<ul className="list list-anime">
					{animes?.map((anime) => (
						<li key={anime.mal_id} onClick={() => onSelectedAnime(anime.mal_id)}>
							<img src={anime.image} alt={`${anime.title} cover`} />
							<h3>{anime.title}</h3>
							<div>
								<p>
									<span>{anime.year}</span>
								</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default ListBox;
