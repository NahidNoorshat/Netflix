"use client";

import Banner from "@/components/Banner";
import Image from "next/image";
import requests from "../../uitls/request";
import { useEffect, useState } from "react";
import Row from "@/components/Row";

export default function Home() {
  const [netflixOriginals, setnetflixOriginals] = useState([]);
  const [trendingNow, settrendingNow] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [actionMovies, setactionMovies] = useState([]);
  const [comedyMovies, setcomedyMovies] = useState([]);
  const [horrorMovies, sethorrorMovies] = useState([]);
  const [romanceMovies, setromanceMovies] = useState([]);
  const [documentaries, setdocumentaries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(requests.fetchNetflixOriginals);
        const trending = await fetch(requests.fetchTrending);
        const topretad = await fetch(requests.fetchTopRated);
        const action = await fetch(requests.fetchActionMovies);
        const horror = await fetch(requests.fetchHorrorMovies);
        const romance = await fetch(requests.fetchRomanceMovies);
        const documetory = await fetch(requests.fetchDocumentaries);
        const comedy = await fetch(requests.fetchComedyMovies);

        const jsonData = await response.json();
        const newcomedy = await comedy.json();
        const newrending = await trending.json();
        const newtopretad = await topretad.json();
        const newaction = await action.json();
        const newhorror = await horror.json();
        const newrpmance = await romance.json();
        const newdocomentory = await documetory.json();

        setnetflixOriginals(jsonData.results);

        setcomedyMovies(newcomedy.results);
        settrendingNow(newrending.results);
        settopRated(newtopretad.results);
        setactionMovies(newaction.results);
        sethorrorMovies(newhorror.results);
        setromanceMovies(newrpmance.results);
        setdocumentaries(newdocomentory.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginals={netflixOriginals} />

      <section className="md:space-y-24">
        <Row title="Trending Now" movies={trendingNow} />
        <Row title="Top Rated" movies={topRated} />
        <Row title="Action Thrillers" movies={actionMovies} />
        {/* My List Component */}

        <Row title="Comedies" movies={comedyMovies} />
        <Row title="Scary Movies" movies={horrorMovies} />
        <Row title="Romance Movies" movies={romanceMovies} />
        <Row title="Documentaries" movies={documentaries} />
      </section>
    </main>
  );
}
