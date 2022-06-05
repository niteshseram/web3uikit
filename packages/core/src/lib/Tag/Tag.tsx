import { Icon } from '@web3uikit/icons';
import styles from './Tag.styles';
import { TagProps } from './types';
import { color as colors } from '@web3uikit/styles';
const { TagStyled, SpanStyled } = styles;

const Tag: React.FC<TagProps> = ({
    active = false,
    color,
    fontSize,
    hasCancel = false,
    id,
    onCancelClick,
    text = 'Tag',
    theme = 'regular',
    tone = 'light',
    width = 'fit-content',
    ...props
}: TagProps) => {
    return (
        <TagStyled
            active={active}
            color={color}
            data-testid="test-tag-id"
            fontSize={fontSize}
            id={id}
            role="status"
            theme={theme}
            tone={tone}
            width={width}
            {...props}
        >
            {theme === 'status' && active && (
                <Icon fill="inherit" size={16} svg={'checkmark'} />
            )}
            <strong data-testid="test-tag-text">{text}</strong>
            {hasCancel && (
                <SpanStyled onClick={onCancelClick}>
                    <Icon fill={colors.blue} size={16} svg="x" />
                </SpanStyled>
            )}
        </TagStyled>
    );
};

export default Tag;