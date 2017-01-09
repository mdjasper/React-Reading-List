import { storiesOf } from '@kadira/storybook';
import BookList from './BookList.js';
import BookTile from '../BookTile/BookTile.js';

storiesOf('BookList', module)

    .add('default', () => (
        <BookList title="Reading List">
            <BookTile
                title="The Cat in the Hat"
                author="Dr. Seuss"
                isbn="0307930440"
                coverImgSrc="https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72N0vdX5lY_U8q_9o-__Pgtv_M7y1cwRcxIDhhHE--BK0ZCV1_PFKfzmTS7vWSmPzf5SSQyjcr5p4Ydi-m40YU4Oy3t9f1VD2DTiyzU9M_TKvg2jYRrJ_Pf0PdzGDVxHrNHaV4o&source=gbs_api"
            />
            <BookTile
                title="Green Eggs and Ham"
                author="Dr. Seuss"
                isbn="9780007355914"
                coverImgSrc="https://books.google.com/books/content?id=6pMUQwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72BF2_gxP5UQ7wrknwdksbH9GvveBawBIcjQxKTdgiajzPPIiMz4-XWwH1_Bm3aJqjaUFFq6vmPRb5-YhzRHZkeEvp9shOMdBWBkM5UKkkK5cB_WDr7K94Ty_hPf59mynSGj3Y3&source=gbs_api"
            />
        </BookList>
    ))

    .add('zebra', () => (
        <BookList zebra title="Reading List">
            <BookTile
                title="The Cat in the Hat"
                author="Dr. Seuss"
                isbn="0307930440"
                coverImgSrc="https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72N0vdX5lY_U8q_9o-__Pgtv_M7y1cwRcxIDhhHE--BK0ZCV1_PFKfzmTS7vWSmPzf5SSQyjcr5p4Ydi-m40YU4Oy3t9f1VD2DTiyzU9M_TKvg2jYRrJ_Pf0PdzGDVxHrNHaV4o&source=gbs_api"
            />
            <BookTile
                title="Green Eggs and Ham"
                author="Dr. Seuss"
                isbn="9780007355914"
                coverImgSrc="https://books.google.com/books/content?id=6pMUQwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72BF2_gxP5UQ7wrknwdksbH9GvveBawBIcjQxKTdgiajzPPIiMz4-XWwH1_Bm3aJqjaUFFq6vmPRb5-YhzRHZkeEvp9shOMdBWBkM5UKkkK5cB_WDr7K94Ty_hPf59mynSGj3Y3&source=gbs_api"
            />
        </BookList>
    ))

    .add('no title', () => (
        <BookList>
            <BookTile
                title="The Cat in the Hat"
                author="Dr. Seuss"
                isbn="0307930440"
                coverImgSrc="https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72N0vdX5lY_U8q_9o-__Pgtv_M7y1cwRcxIDhhHE--BK0ZCV1_PFKfzmTS7vWSmPzf5SSQyjcr5p4Ydi-m40YU4Oy3t9f1VD2DTiyzU9M_TKvg2jYRrJ_Pf0PdzGDVxHrNHaV4o&source=gbs_api"
            />
            <BookTile
                title="Green Eggs and Ham"
                author="Dr. Seuss"
                isbn="9780007355914"
                coverImgSrc="https://books.google.com/books/content?id=6pMUQwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72BF2_gxP5UQ7wrknwdksbH9GvveBawBIcjQxKTdgiajzPPIiMz4-XWwH1_Bm3aJqjaUFFq6vmPRb5-YhzRHZkeEvp9shOMdBWBkM5UKkkK5cB_WDr7K94Ty_hPf59mynSGj3Y3&source=gbs_api"
            />
        </BookList>
    ))

;
