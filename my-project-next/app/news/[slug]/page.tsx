import { notFound } from "next/navigation";
import Article from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <div>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">一覧に戻る</ButtonLink>
      </div>
    </div>
  );
}
