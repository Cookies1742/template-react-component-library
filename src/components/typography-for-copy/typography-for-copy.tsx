import React, { FC, useEffect, useRef, useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { createCn } from 'bem-react-classname';

import { Position } from '@alfalab/core-components/popover';
import { Tooltip } from '@alfalab/core-components/tooltip';
import { TextProps, Typography } from '@alfalab/core-components/typography';

const cn = createCn('typography-for-copy');

const ERROR_NOTIFICATION_TEXT = 'Не удалось скопировать данные';

export interface TypographyForCopyProps extends TextProps {
    /** Уникальный идентификатор блока */
    id?: string;
    /** Значение для отображения */
    value: string;
    /** Значение для копирования */
    valueToCopy?: string;
    /** Цвет текста при наведении */
    hoverColor?: TextProps['color'];
    /** Текст уведомления о копировании */
    notificationText?: string;
    /** Задержка перед закрытием уведомления */
    closeDelay?: number;
    /** Позиционирование уведомления */
    position?: Position;
    /** z-index уведомления */
    zIndex?: number;
}

/**
 * Компонент TypographyForCopy.
 */
export const TypographyForCopy: FC<TypographyForCopyProps> = ({
    value,
    valueToCopy = value,
    color: colorProp = 'primary',
    hoverColor = colorProp,
    notificationText: notificationTextProp = 'Скопировано',
    closeDelay = 300,
    position,
    zIndex,
    ...typographyProps
}) => {
    const timer = useRef<ReturnType<typeof setTimeout>>();
    const [{ error }, copyToClipboard] = useCopyToClipboard();
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const color = isMouseEnter ? hoverColor : colorProp;
    const notificationText = error ? ERROR_NOTIFICATION_TEXT : notificationTextProp;

    const handleMouseEnterToggle = () => {
        setIsMouseEnter((prev) => !prev);
    };

    const handleClick = () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        copyToClipboard(valueToCopy);
        setIsNotificationVisible(true);

        timer.current = setTimeout(() => {
            setIsNotificationVisible(false);
        }, closeDelay);
    };

    const handleNotificationClose = () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        setIsNotificationVisible(false);
    };

    useEffect(() => {
        return () => timer.current && clearTimeout(timer.current);
    }, []);

    return (
        <Tooltip
            open={ isNotificationVisible }
            content={ notificationText }
            position={ position }
            view='hint'
            zIndex={ zIndex }
            arrowClassName={ cn('tooltip-arrow') }
            onClose={ handleNotificationClose }
        >
            <a
                className={ cn() }
                onClick={ handleClick }
                onMouseEnter={ handleMouseEnterToggle }
                onMouseLeave={ handleMouseEnterToggle }
            >
                <Typography.Text { ...typographyProps } color={ color }>
                    { value }
                </Typography.Text>
            </a>
        </Tooltip>
    );
};

export default TypographyForCopy;
