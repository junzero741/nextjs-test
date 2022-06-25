import { parseISO, format } from "date-fns";
import styled from "styled-components";

export default function Date({ dateString } : { dateString: string }) {
    const date = parseISO(dateString)
    return <StyledTime dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</StyledTime>
}

const StyledTime = styled.time`
    color: ${({ theme }) => theme.color.lightGray};
`